# AMR Vela CLI CI Integration Review Summary

## Summary

This PR wires Open Design's beta mac arm64 packaging path to Vela's npm-owned CLI distribution contract.

The goal is to make packaged AMR builds use a lockfile-backed Vela CLI package instead of requiring CI to download, build, or manually locate a Vela binary. The rollout is intentionally narrow: beta mac arm64 release builds require Vela, while mac Intel, Windows, Linux, preview, and stable builds remain non-strict and continue to skip Vela bundling when unsupported.

## Design Contract

Open Design depends only on the Vela meta package:

```json
"@powerformer/vela-cli": "0.0.1-test.0"
```

Open Design does not depend directly on platform packages such as `@powerformer/vela-cli-darwin-arm64`. Vela owns that platform matrix through optional dependencies and its resolver API.

The Vela CLI binary resolution order is:

1. `OPEN_DESIGN_VELA_CLI_BIN`
2. Dynamic import of `@powerformer/vela-cli`
3. `resolveVelaCliBin({ strict })`

This preserves a developer/emergency override while making npm the normal CI contract.

## Implemented Behavior

`tools-pack` now supports `--require-vela-cli`. When this flag is absent, missing Vela packages, unsupported platforms, missing resolvers, or null resolver results are treated as "skip Vela bundling." When this flag is present, packaging fails with an actionable error that mentions both remediation paths: install/use `@powerformer/vela-cli` or set `OPEN_DESIGN_VELA_CLI_BIN`.

Vela resource copying now resolves the binary through the shared resolver path and copies it into:

```text
resources/open-design/bin/vela
```

The copied file is marked executable on POSIX platforms.

The beta release workflow passes `--require-vela-cli` only in the mac arm64 release build path. Other release-beta jobs remain non-strict.

Windows resource cache keys include the optional Vela binary when present, preserving cache correctness without making Windows strict in this rollout.

## Vela Package Status

The first verification npm packages have been published:

- `@powerformer/vela-cli@0.0.1-test.0`
- `@powerformer/vela-cli-darwin-arm64@0.0.1-test.0`

Open Design should install only `@powerformer/vela-cli`. The meta package pulls the macOS arm64 binary package as an optional dependency on supported machines.

Local verification outside the Vela monorepo:

```bash
npm install @powerformer/vela-cli@0.0.1-test.0
npx vela --version
```

Expected output:

```text
0.0.1-test.0
```

## Validation

Focused `tools-pack` tests cover:

- `--require-vela-cli` config parsing;
- env-provided Vela binary copying and executable permissions;
- npm-resolved Vela binary copying and executable permissions;
- env override priority over npm resolver output;
- strict missing-package and missing-binary failures;
- non-strict unsupported-platform skip behavior;
- release-beta workflow placement of `--require-vela-cli`.

Local validation passed under Node `v24.0.0` and pnpm `10.33.2`:

```bash
pnpm --dir tools/pack exec vitest run tests/resources.test.ts tests/release-workflows.test.ts tests/win-resources.test.ts tests/config.test.ts tests/linux.test.ts
pnpm --filter @open-design/tools-pack typecheck
pnpm typecheck
pnpm guard
```

The focused test run passed 69 tests across 5 files.

A local non-publishing beta mac arm64 dry run also succeeded with `--require-vela-cli`, producing a DMG and bundling a Vela binary at:

```text
.tmp/release-beta-dry-run/out/mac/namespaces/release-beta/resources/open-design/bin/vela
```

The bundled binary was verified as executable and `Mach-O 64-bit executable arm64`.

## Review Focus

Reviewers should focus on these boundaries:

- Open Design depends only on `@powerformer/vela-cli`.
- `OPEN_DESIGN_VELA_CLI_BIN` remains highest priority.
- Strict mode is opt-in and used only by beta mac arm64 CI.
- Non-strict platforms must not fail when Vela is unsupported or unavailable.
- Strict-mode errors include both remediation paths.
- Workflow tests prevent accidental strict-mode rollout to other platforms.

## Known Limits

The local dry run did not exercise Apple signing, notarization, R2 upload, GitHub artifact upload, or release metadata publishing because those require CI secrets and hosted runner context.

The first local dry run using `/tmp` exposed an existing path-shape issue caused by macOS resolving `/tmp` through `/private/tmp` in prebundle entrypoints. The successful dry run used the repository `.tmp` path, which better matches normal project-local tools-pack usage.

## Follow-Ups

After Vela publishes the first stable package version, update `tools/pack/package.json` and `pnpm-lock.yaml` from `0.0.1-test.0` to the stable version.

When Vela supports additional platforms, selectively enable `--require-vela-cli` for those release jobs and add matching workflow smoke coverage.
