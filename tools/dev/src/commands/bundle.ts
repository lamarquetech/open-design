import path from "node:path";

import type { CAC, Command } from "cac";

import { resolveToolDevConfig, type ToolDevConfig } from "../config.js";
import type { CliOptions } from "../runtime/options.js";
import {
  WEB_BUNDLE_ENTRY,
  addToolsDevBundle,
  deleteToolsDevBundle,
  listToolsDevBundles,
  normalizeBundleRef,
  readToolsDevActivation,
  resolveToolsDevBundle,
  writeWebSource,
  type ToolsDevWebSource,
} from "../bundles.js";

export type BundleCliOptions = {
  entry?: string;
  key?: string;
  persistent?: boolean;
  replace?: boolean;
};

type BundleCommandOptions = CliOptions & BundleCliOptions;
type AddSharedOptions = (command: Command) => Command;

type BundleArgs = {
  config: ToolDevConfig;
  options: BundleCommandOptions;
  sourcePath?: string;
  target?: string;
};

type BundleHandler = (args: BundleArgs) => Promise<void>;

function printJson(payload: unknown): void {
  process.stdout.write(`${JSON.stringify(payload, null, 2)}\n`);
}

function asRecord(value: unknown): Record<string, unknown> | null {
  return value != null && typeof value === "object" && !Array.isArray(value) ? value as Record<string, unknown> : null;
}

function stringField(record: Record<string, unknown>, key: string): string | null {
  const value = record[key];
  return typeof value === "string" && value.length > 0 ? value : null;
}

function formatBundleRef(ref: { key: string; version: string }): string {
  return `${ref.key}@${ref.version}`;
}

function formatWebSource(source: ToolsDevWebSource): string {
  if (source.type === "workspace") return "workspace";
  if (source.type === "explicitPath") return `explicit path ${source.entryPath}`;
  return `bundle ${formatBundleRef(source.ref)} entry ${source.entry}`;
}

function printBundleResult(result: unknown, options: BundleCommandOptions, heading: string): void {
  if (options.json === true) {
    printJson(result);
    return;
  }

  const record = asRecord(result);
  process.stdout.write(`${heading}\n`);
  const basePath = stringField(record ?? {}, "basePath");
  if (basePath != null) process.stdout.write(`base: ${basePath}\n`);

  const activation = asRecord(record?.activation);
  const webSource = activation == null ? asRecord(record?.web) : asRecord(activation.web);
  if (webSource != null) {
    process.stdout.write(`active web: ${formatWebSource(webSource as ToolsDevWebSource)}\n`);
  }

  const bundle = asRecord(record?.bundle);
  if (bundle != null) {
    const ref = asRecord(bundle.ref);
    process.stdout.write(`bundle: ${ref == null ? "unknown" : formatBundleRef(ref as { key: string; version: string })}\n`);
    const bundlePath = stringField(bundle, "path");
    const metadataPath = stringField(bundle, "metadataPath");
    if (bundlePath != null) process.stdout.write(`path: ${bundlePath}\n`);
    if (metadataPath != null) process.stdout.write(`metadata: ${metadataPath}\n`);
  }

  const deleted = record?.deleted;
  if (typeof deleted === "boolean") process.stdout.write(`deleted: ${deleted ? "yes" : "no"}\n`);

  const bundles = record?.bundles;
  if (!Array.isArray(bundles)) return;
  if (bundles.length === 0) {
    process.stdout.write("(no bundles)\n");
    return;
  }
  for (const entry of bundles) {
    const bundleEntry = asRecord(entry);
    const ref = asRecord(bundleEntry?.ref);
    const displayRef = ref == null ? "unknown" : formatBundleRef(ref as { key: string; version: string });
    const entryPath = stringField(bundleEntry ?? {}, "path") ?? "";
    process.stdout.write(`- ${displayRef}${entryPath.length === 0 ? "" : ` · ${entryPath}`}\n`);
  }
}

function requireTarget(action: string, target: string | undefined): string {
  if (target == null) throw new Error(`bundle ${action} requires <version>`);
  return target;
}

function requireSource(action: string, sourcePath: string | undefined): string {
  if (sourcePath == null) throw new Error(`bundle ${action} requires <sourcePath>`);
  return sourcePath;
}

const BUNDLE_HANDLERS: Record<string, BundleHandler> = {
  active: async ({ config, options }) => {
    printBundleResult({
      activation: await readToolsDevActivation(config),
      basePath: config.bundleBasePath,
    }, options, "tools-dev bundle active");
  },
  add: async ({ config, options, sourcePath, target }) => {
    const version = requireTarget("add", target);
    const ref = normalizeBundleRef({ key: options.key, version });
    const bundle = await addToolsDevBundle({
      config,
      ref,
      replace: options.replace === true,
      sourcePath: requireSource("add", sourcePath),
    });
    printBundleResult({ basePath: config.bundleBasePath, bundle }, options, "tools-dev bundle add");
  },
  delete: async ({ config, options, target }) => {
    const version = requireTarget("delete", target);
    const ref = normalizeBundleRef({ key: options.key, version });
    const deleted = await deleteToolsDevBundle({ config, ref });
    printBundleResult({ basePath: config.bundleBasePath, deleted }, options, "tools-dev bundle delete");
  },
  list: async ({ config, options }) => {
    printBundleResult({
      activation: await readToolsDevActivation(config),
      basePath: config.bundleBasePath,
      bundles: await listToolsDevBundles(config),
    }, options, "tools-dev bundle list");
  },
  resolve: async ({ config, options, target }) => {
    const version = requireTarget("resolve", target);
    const ref = normalizeBundleRef({ key: options.key, version });
    const bundle = await resolveToolsDevBundle({ config, ref });
    printBundleResult({ basePath: config.bundleBasePath, bundle }, options, "tools-dev bundle resolve");
  },
  use: async ({ config, options, target }) => {
    const version = requireTarget("use", target);
    const ref = normalizeBundleRef({ key: options.key, version });
    const activation = await writeWebSource(config, {
      entry: options.entry ?? WEB_BUNDLE_ENTRY,
      ref,
      type: "bundle",
    });
    printBundleResult({ activation, basePath: config.bundleBasePath }, options, "tools-dev bundle use");
  },
  "use-path": async ({ config, options, target }) => {
    if (target == null) throw new Error("bundle use-path requires <entryPath>");
    const activation = await writeWebSource(config, {
      entryPath: path.resolve(target),
      ...(options.persistent === true ? { persistent: true } : {}),
      type: "explicitPath",
    });
    printBundleResult({ activation, basePath: config.bundleBasePath }, options, "tools-dev bundle use-path");
  },
  "use-workspace": async ({ config, options }) => {
    const activation = await writeWebSource(config, { type: "workspace" });
    printBundleResult({ activation, basePath: config.bundleBasePath }, options, "tools-dev bundle use-workspace");
  },
};

async function runBundleAction(
  config: ToolDevConfig,
  action: string,
  target: string | undefined,
  sourcePath: string | undefined,
  options: BundleCommandOptions,
): Promise<void> {
  const handler = BUNDLE_HANDLERS[action];
  if (handler == null) throw new Error(`unsupported bundle action: ${action}`);
  await handler({ config, options, sourcePath, target });
}

export function registerBundleCommand(cli: CAC, addSharedOptions: AddSharedOptions): void {
  addSharedOptions(
    cli.command(
      "bundle <action> [target] [sourcePath]",
      "Manage tools-dev bundles: list|active|add|resolve|delete|use|use-workspace|use-path",
    ),
  )
    .option("--key <key>", "bundle key (default: od:sidecar:web)")
    .option("--entry <path>", `entry inside the bundle (default: ${WEB_BUNDLE_ENTRY})`)
    .option("--replace", "replace an existing bundle with the same key/version")
    .option("--persistent", "mark an explicit path as persistent in status diagnostics")
    .action(async (action: string, target: string | undefined, sourcePath: string | undefined, options: BundleCommandOptions) => {
      await runBundleAction(resolveToolDevConfig(options), action, target, sourcePath, options);
    });
}
