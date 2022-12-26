import { readFileSync, writeFileSync, existsSync } from "node:fs";
import type { RecentFile } from "./recent.slides.d";
import { join } from "node:path";
import { tmpdir } from "node:os";

function appendRecentFile(file: RecentFile) {
  const dir = join(tmpdir(), "..", "zhihui", "recent.slides.json");
  const recent = getRecentFile();
  recent.reverse().push(file);
  writeFileSync(dir, JSON.stringify(recent.reverse()));
}

function getRecentFile() {
  const dir = join(tmpdir(), "..", "zhihui", "recent.slides.json");
  if (existsSync(dir)) {
    return JSON.parse(readFileSync(dir, "utf-8").toString())
      .files as RecentFile[];
  } else {
    writeFileSync(dir, JSON.stringify({ files: [] }));
    return [];
  }
}

function checkRecentFile() {
  const dir = join(tmpdir(), "..", "zhihui", "recent.slides.json");
  const recent = getRecentFile();
  recent.forEach((file) => {
    if (!existsSync(file.path)) {
      recent.splice(recent.indexOf(file), 1);
    }
  });
  writeFileSync(dir, JSON.stringify(recent.reverse()));
}

export {
  appendRecentFile as append,
  getRecentFile as get,
  checkRecentFile as check,
};
