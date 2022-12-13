import { UAParser } from "ua-parser-js";
import { ElNotification } from "element-plus";

const parser = new UAParser();

const result = parser.getResult();

// Show the dialog that not is in the electron and break

if (result.browser.name !== "Electron") {
  ElNotification({
    title: "Error",
    message: "This app is not in the electron",
    type: "error",
    showClose: false,
    duration: 0,
  });
  window.location.href = "about:blank";
}

export const UA = result;
