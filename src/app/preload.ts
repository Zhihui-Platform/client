import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("zhihui", {
  close(window: string) {
    ipcRenderer.send("close", window);
  },
  minimize(window: string) {
    ipcRenderer.send("minimize", window);
  },
  maximize(window: string) {
    ipcRenderer.send("maximize", window);
  },
  fullscreen(window: string) {
    ipcRenderer.send("fullscreen", window);
  },
  useSettings() {
    ipcRenderer.send("settings");
  },
});
