import { exec as $, execSync } from "node:child_process";

export async function createServer(dir: string, npx: string) {
  const script = `${npx} slidev`;
  return $(script, {
    cwd: dir,
  });
}

export async function buildSlides(dir: string, npx: string) {
  const script = `${npx} slidev build --download`;
  execSync(script, {
    cwd: dir,
  });
}

export async function exportSlides(
  dir: string,
  options: {
    dark?: boolean;
    range?: string;
    withClicks?: boolean;
    output: "pdf" | "png" | "md";
  },
  npx: string
) {
  const script = `${npx} slidev export --format ${options.output} ${
    options.withClicks ? "--with-clicks" : ""
  } ${options.range ? "--range " + options.range : ""} ${
    options.dark ? "--dark" : ""
  } --timeout 120000`;
  execSync(script, {
    cwd: dir,
  });
}

createServer("J:\\co-operation\\test3", "npx");
