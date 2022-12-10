// Detect whether nodejs, npm, and npx has been installed to path.

import { join } from "node:path";
import { platform, tmpdir } from "node:os";
import { existsSync, readdirSync } from "node:fs";

export function detectNodejs() {
  try {
    const folder = join(tmpdir(), "..", "zhihui", "runtimes", "nodejs");
    const folder_node = readdirSync(folder)[0];
    return existsSync(
      join(folder, folder_node, platform() === "win32" ? "node.exe" : "node")
    );
  } catch (error) {
    return false;
  }
}
