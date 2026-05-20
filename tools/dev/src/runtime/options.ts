import type { ToolDevOptions } from "../config.js";

export type CliOptions = ToolDevOptions & {
  expr?: string;
  parentPid?: number;
  path?: string;
  selector?: string;
  timeout?: string;
  updateAction?: string;
};
