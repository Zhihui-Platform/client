import {
  app,
  BrowserWindow,
  ipcMain,
  dialog,
  screen,
  Tray,
  Menu,
  MenuItem,
  protocol,
} from "electron";
import { resolve, join } from "node:path";

app.whenReady().then(() => {
  const { width: screenWidth, height: screenHeight } =
    screen.getPrimaryDisplay().workAreaSize;

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
  });

  let settingsWindow: BrowserWindow;

  if (process.env.NODE_ENV === "development") {
    mainWindow.loadURL("http://localhost:5173");
    mainWindow.webContents.openDevTools();
  } else {
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
    }
  });
  ipcMain.on("minimize", (_ev, window: string) => {
    if (window === "main") {
      mainWindow.minimize();
    } else if (window === "settings") {
      settingsWindow.minimize();
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

try {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  require("electron-reloader")(module);
  // eslint-disable-next-line no-empty
} catch {}
