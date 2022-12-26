import { execSync } from "node:child_process";
import { readdir } from "node:fs/promises";
import { join } from "node:path";
import { tmpdir, platform } from "node:os";

const $ = execSync;

export async function installPackage() {
  const node_folder = join(tmpdir(), "..", "zhihui", "runtimes", "nodejs");
  const node_folder_node = (await readdir(node_folder))[0];
  const node_dir = join(node_folder, node_folder_node);
  const npm = join(node_dir, platform() === "win32" ? "npm.cmd" : "npm");
  const npx = join(node_dir, platform() === "win32" ? "npx.cmd" : "npx");
  const node = join(node_dir, platform() === "win32" ? "node.exe" : "node");

  const commands = [
    `${npm} install -g @slidev/cli @slidev/theme-seriph @slidev/theme-default @slidev/theme-apple @slidev/theme-bricks @slidev/theme-shibainu`,
  ];

  commands.forEach((command) => $(command));

  return {
    npm,
    npx,
    node,
  };
}
