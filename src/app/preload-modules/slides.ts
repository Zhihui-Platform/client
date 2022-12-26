// Preload module which expand in the main world, `window`.
import { ipcRenderer } from "electron";

export default {
  openCreateSlideWindow() {
    console.log("openCreateSlideWindow");
    ipcRenderer.send("slide:opencreate");
  },
  createSlide(dir: string, name: string, theme: string) {
    ipcRenderer.send("slide:create", {
      dir,
      name,
      theme,
    });
  },
  startPreview(dir: string) {
    ipcRenderer.send("slide:preview", dir);
  },
  createRecentFile(file: {
    name: string;
    path: string;
    author: string;
    createDate: string;
  }) {
    ipcRenderer.send("slide:createrecent", {
      ...file,
      // editDate: dayjs().format("YYYY-MM-DD HH:mm:ss"),
    });
  },
  getRecentFile() {
    return ipcRenderer.invoke("slide:getrecent");
  },
  async getSlidePath() {
    const result = await ipcRenderer.invoke(
      "slide:getnewfilepath",
      new Date().getTime()
    );
    console.log(result);
    return result;
  },
};
