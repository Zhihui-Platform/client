// Download nodejs binary via the location from ./fetch-version.ts

import { getDownloadUrl } from "./fetch-version";
import { writeFile, readdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import { tmpdir, platform } from "node:os";
import { join } from "node:path";

import * as StreamZip from "node-stream-zip";

export async function downloadBinary() {
  const url = await getDownloadUrl();
  console.log(url, url.split("/").pop(), tmpdir());
  const path = join(tmpdir(), url.split("/").pop());
  console.log(path);
  const stream = await fetch(url);
  console.log(stream.headers);
  const arraybuffer = await stream.arrayBuffer();
  const buffer = Buffer.from(arraybuffer);
  await writeFile(path, buffer);
  // unzip
  const zip = new StreamZip.async({ file: path });
  const folder = join(tmpdir(), "..", "zhihui", "runtimes", "nodejs");
  await zip.extract(null, folder);
  const folder_node = (await readdir(folder))[0];
  if (
    !existsSync(
      join(folder, folder_node, platform() === "win32" ? "node.exe" : "node")
    )
  ) {
    throw new Error(
      "node.exe not found. Please clear out " + folder + " and try again."
    );
  }
  console.log(folder, folder_node);
  await zip.close();
}

downloadBinary();
