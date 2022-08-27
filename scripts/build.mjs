import { build } from "vite";
import { copyFile, readFile } from "node:fs/promises";
import { resolve } from "node:path";
import chalk from "chalk";

async function main() {
  console.log(
    "  ",
    chalk.green.bold("Reading"),
    "package data of the file",
    chalk.underline("package.json")
  );
  const packageFile = await readFile(resolve("package.json"));
  const packages = JSON.parse(packageFile.toString());
  const { version } = packages;
  // console.log(
  //   chalk.green("The version is " + version + ", requesting for the release...")
  // );
  console.log(
    chalk.green.bold("      Info"),
    "start to request the latest release of the GitHub."
  );
  // await build();
  // await copyFile(
  //   resolve("splashscreen.html"),
  //   resolve("dist", "splashscreen.html")
  // );
}

main();
