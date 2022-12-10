import { execSync as $ } from "node:child_process";
import { mkdir, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { join } from "node:path";

async function getPackageLatestVersion(packageName: string) {
  const response = await fetch(`https://registry.npmjs.org/${packageName}`);
  const json = await response.json();
  if (json.error) {
    throw new Error("Theme not found!");
  }
  if (!("dist-tags" in json)) {
    throw new Error("Theme not found!");
  }
  if (!("latest" in json["dist-tags"])) {
    throw new Error("Theme not found!");
  }
  return json["dist-tags"].latest;
}

export async function createProject(
  dist: string,
  projectName: string,
  theme: string,
  npm: string,
  npx: string
) {
  const dir = join(dist, projectName);
  if (!existsSync(dist)) {
    throw new Error("Dist not exists!");
  }
  if (existsSync(dir)) {
    throw new Error("Project isn't empty!");
  }
  await mkdir(dir);
  let useTheme = theme;
  if (
    ["default", "seriph", "apple-basic", "bricks", "shibainu"].includes(theme)
  ) {
    useTheme = `@slidev/theme-${theme}`; // Official themes
  } else {
    useTheme = `slidev-theme-${theme}`; // Custom themes
  }

  const packageJson = {
    name: projectName,
    devDependencies: {
      "@slidev/cli": await getPackageLatestVersion("@slidev/cli"),
      [useTheme]: await getPackageLatestVersion(useTheme),
      "playwright-chromium": await getPackageLatestVersion(
        "playwright-chromium"
      ),
    },
  };

  await writeFile(
    join(dir, "package.json"),
    JSON.stringify(packageJson, null, 2)
  );
  const commands = [`${npm} install`, `${npx} slidev`];

  const frontmatter = {
    theme,
    title: projectName,
    titleTemplate: `%s - ${projectName}`,
    download: true,
    exportFilename: "zhihui-slides.pdf",
    lineNumbers: true,
    selectable: false,
    record: true,
    drawings: {
      persist: true,
    },
  };

  const markdownFile = `---
${Object.entries(frontmatter)
  .map(([key, value]) => `${key}: ${JSON.stringify(value)}`)
  .join("\n")}
---

# ${projectName}

This is a new PPT

---

## PAGE 2`;
  await writeFile(join(dir, "slides.md"), markdownFile);
  commands.forEach((command) => {
    console.log(command, dir);
    $(command, {
      cwd: dir,
    });
  });

  await mkdir(join(dir, "assets"));
  await mkdir(join(dir, "setup"));
}
