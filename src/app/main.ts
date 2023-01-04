import { app, BrowserWindow, dialog, ipcMain, screen, shell } from "electron";
import { join, resolve } from "node:path";

app.whenReady().then(() => {
  const { width: screenWidth, height: screenHeight } = screen.getPrimaryDisplay().workAreaSize;

  const splashscreen = new BrowserWindow({
    width: 640,
    height: 400,
    frame: false,
    show: false,
    alwaysOnTop: true,
    resizable: false,
  });

  splashscreen.loadURL(join("file://", __dirname, "splashscreen.html"));

  splashscreen.once("ready-to-show", () => {
    splashscreen.show();
  });

  const mainWindow = new BrowserWindow({
    width: (screenWidth * 2) / 3,
    height: (screenHeight * 2) / 3,
    frame: false,
    show: false,
    webPreferences: {
      preload: resolve(__dirname, "zhihui-preload.js"),
      sandbox: true,
    },
    resizable: false,
  });

  let settingsWindow: BrowserWindow;
  let createSlidesWindow: BrowserWindow;

  if (process.env.NODE_ENV === "development") {
    mainWindow.loadURL("http://localhost:5173/class/");
    mainWindow.webContents.openDevTools();
  } else {
    // Here, we use the protocol module to register a custom protocol
  }
  mainWindow.once("ready-to-show", () => {
    splashscreen.close();
    mainWindow.show();
  });
  ipcMain.on("close", (_ev, window: string) => {
    if (window === "main") {
      mainWindow.close();
    } else if (window === "settings") {
      settingsWindow.close();
    } else if (window === "createslide") {
      createSlidesWindow.close();
    }
  });
  ipcMain.on("minimize", (_ev, window: string) => {
    if (window === "main") {
      mainWindow.minimize();
    } else if (window === "settings") {
      settingsWindow.minimize();
      mainWindow.minimize();
    } else if (window === "createslide") {
      createSlidesWindow.minimize();
      mainWindow.minimize();
    }
  });
  ipcMain.on("maximize", (_ev, window: string) => {
    if (window === "main") {
      if (mainWindow.isMaximized()) {
        mainWindow.unmaximize();
      } else {
        mainWindow.maximize();
      }
    }
  });
  ipcMain.on("fullscreen", (_ev, window: string) => {
    if (window === "main") {
      if (mainWindow.isFullScreen()) {
        mainWindow.setFullScreen(false);
      } else {
        mainWindow.setFullScreen(true);
      }
    }
  });
  mainWindow.on("close", (event) => {
    event.preventDefault();
    mainWindow.hide();
  });
  ipcMain.on("settings", () => {
    settingsWindow = new BrowserWindow({
      width: (screenWidth * 3) / 5,
      height: (screenHeight * 3) / 5,
      frame: false,
      show: false,
      webPreferences: {
        preload: resolve(__dirname, "zhihui-preload.js"),
      },
      parent: mainWindow,
      modal: true,
    });
    settingsWindow.loadURL("http://localhost:5173/config");
    settingsWindow.once("ready-to-show", () => {
      settingsWindow.show();
    });
  });
});

/**
 * @function isSafeForExternalOpen
 * @param url
 * @returns {boolean}
 * @description Checks if the url is safe for external open
 */
function isSafeForExternalOpen(url: string) {
  const safeHostsUsed = ["localhost", "pages", "cn.sli.dev", "www.npmjs.com"];
  return safeHostsUsed.includes(new URL(url).hostname);
}

app.on("web-contents-created", (event, contents) => {
  contents.on("will-navigate", (event, navigationUrl) => {
    const parsedUrl = new URL(navigationUrl);

    if (parsedUrl.hostname !== "localhost" && parsedUrl.protocol !== "zhihui") {
      if (isSafeForExternalOpen(navigationUrl)) {
        setImmediate(() => {
          shell.openExternal(navigationUrl);
        });
      }
      event.preventDefault();
    }
  });

  contents.setWindowOpenHandler(({ url }) => {
    if (isSafeForExternalOpen(url)) {
      setImmediate(() => {
        shell.openExternal(url);
      });
    }

    return { action: "deny" };
  });
});

try {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  require("electron-reloader")(module);
  // eslint-disable-next-line no-empty
} catch {}
