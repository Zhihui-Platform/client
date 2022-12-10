import { platform, arch } from "os";

export async function fetchVersion() {
  const response = await fetch("https://registry.npmjs.org/node");
  const json = await response.json();
  return "v" + json["dist-tags"].latest;
}

export async function getDownloadUrl() {
  const version = await fetchVersion();
  const os = platform() === "win32" ? "win" : platform();
  const arc = arch() === "ia32" ? "x86" : arch();
  const ext = os === "win" ? ".zip" : ".tar.gz";
  return `https://nodejs.org/dist/${version}/node-${version}-${os}-${arc}${ext}`;
}

// getDownloadUrl().then((url) => console.log(url));
