import { UAParser } from "ua-parser-js";
import { ElMessageBox } from "element-plus";

const parser = new UAParser();

const result = parser.getResult();

// Show the dialog that not is in the electron and break

if (result.browser.name !== "Electron") {
  const second = 3;
  const result = `应用未在 Electron 中运行，无法使用。将在 ${second} 秒后关闭。`;
  ElMessageBox({
    title: "错误",
    message: result,
    type: "error",
    showClose: false,
    center: true,
    roundButton: true,
  })
    .then(() => {
      location.href = "about:blank";
      window.close();
    })
    .catch(() => {
      location.href = "about:blank";
      window.close();
    });
  setTimeout(() => {
    location.href = "about:blank";
    window.close();
  }, second * 1000);
}

export const UA = result;
