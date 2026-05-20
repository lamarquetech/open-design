import {
  APP_KEYS,
  SIDECAR_MESSAGES,
  type DaemonStatusSnapshot,
  type DesktopClickResult,
  type DesktopConsoleResult,
  type DesktopEvalResult,
  type DesktopScreenshotResult,
  type DesktopStatusSnapshot,
  type DesktopUpdateResult,
  type WebStatusSnapshot,
} from "@open-design/sidecar-proto";
import { requestJsonIpc } from "@open-design/sidecar";

import type { CliOptions } from "./options.js";
import type { ToolDevAppName, ToolDevConfig } from "../config.js";
import { findAppProcessTree, runtimeLookup } from "./processes.js";
import {
  inspectDaemonRuntime,
  inspectDesktopRuntime,
  inspectWebRuntime,
} from "../sidecar-client.js";

function parseTimeoutMs(value: string | undefined): number | undefined {
  if (value == null) return undefined;
  const seconds = Number(value);
  if (!Number.isFinite(seconds) || seconds <= 0) throw new Error("--timeout must be a positive number of seconds");
  return seconds * 1000;
}

export async function inspectAppStatus(config: ToolDevConfig, appName: ToolDevAppName) {
  if (appName === APP_KEYS.DAEMON) {
    const status = await inspectDaemonRuntime(runtimeLookup(config));
    if (status != null) return status;
    const active = await findAppProcessTree(config, appName);
    return {
      desktopAuthGateActive: false,
      pid: active.rootPids[0] ?? null,
      state: active.pids.length > 0 ? "starting" : "idle",
      url: null,
    } satisfies DaemonStatusSnapshot;
  }
  if (appName === APP_KEYS.WEB) {
    const status = await inspectWebRuntime(runtimeLookup(config));
    if (status != null) return status;
    const active = await findAppProcessTree(config, appName);
    return { pid: active.rootPids[0] ?? null, state: active.pids.length > 0 ? "starting" : "idle", url: null } satisfies WebStatusSnapshot;
  }

  const status = await inspectDesktopRuntime(runtimeLookup(config));
  if (status != null) return status;
  const active = await findAppProcessTree(config, appName);
  return { pid: active.rootPids[0] ?? null, state: active.pids.length > 0 ? "unknown" : "idle", url: null };
}

async function inspectDesktop(config: ToolDevConfig, target: string | undefined, options: CliOptions) {
  const operation = target ?? "status";
  const timeoutMs = parseTimeoutMs(options.timeout) ?? 30000;

  switch (operation) {
    case "status":
      return (await inspectDesktopRuntime(runtimeLookup(config), 1000)) ?? ({ state: "idle" } satisfies DesktopStatusSnapshot);
    case "eval":
      if (options.expr == null) throw new Error("--expr is required for desktop eval");
      return await requestJsonIpc<DesktopEvalResult>(
        config.apps.desktop.ipcPath,
        { input: { expression: options.expr }, type: SIDECAR_MESSAGES.EVAL },
        { timeoutMs },
      );
    case "screenshot":
      if (options.path == null) throw new Error("--path is required for desktop screenshot");
      return await requestJsonIpc<DesktopScreenshotResult>(
        config.apps.desktop.ipcPath,
        { input: { path: options.path }, type: SIDECAR_MESSAGES.SCREENSHOT },
        { timeoutMs },
      );
    case "console":
      return await requestJsonIpc<DesktopConsoleResult>(config.apps.desktop.ipcPath, { type: SIDECAR_MESSAGES.CONSOLE }, { timeoutMs });
    case "update":
      if (options.updateAction != null && !["status", "check", "download", "install"].includes(options.updateAction)) {
        throw new Error("--update-action must be status, check, download, or install");
      }
      return await requestJsonIpc<DesktopUpdateResult>(
        config.apps.desktop.ipcPath,
        { input: { action: options.updateAction ?? "status" }, type: SIDECAR_MESSAGES.UPDATE },
        { timeoutMs },
      );
    case "click":
      if (options.selector == null) throw new Error("--selector is required for desktop click");
      return await requestJsonIpc<DesktopClickResult>(
        config.apps.desktop.ipcPath,
        { input: { selector: options.selector }, type: SIDECAR_MESSAGES.CLICK },
        { timeoutMs },
      );
    default:
      throw new Error(`unsupported desktop inspect target: ${operation}`);
  }
}

export async function inspect(config: ToolDevConfig, appName: string, target: string | undefined, options: CliOptions) {
  if (appName === APP_KEYS.DAEMON) {
    if (target != null && target !== "status") throw new Error(`unsupported daemon inspect target: ${target}`);
    return (
      (await inspectDaemonRuntime(runtimeLookup(config), 1000)) ??
      ({ desktopAuthGateActive: false, state: "idle", url: null } satisfies DaemonStatusSnapshot)
    );
  }
  if (appName === APP_KEYS.WEB) {
    if (target != null && target !== "status") throw new Error(`unsupported web inspect target: ${target}`);
    return (await inspectWebRuntime(runtimeLookup(config), 1000)) ?? ({ state: "idle", url: null } satisfies WebStatusSnapshot);
  }
  if (appName !== APP_KEYS.DESKTOP) throw new Error(`unsupported tools-dev app: ${appName}`);
  return await inspectDesktop(config, target, options);
}
