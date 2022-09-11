import { defineStore } from "pinia";

export const useHeaderStore = defineStore({
  id: "header",
  state: () => ({
    close: false,
    minimize: false,
    maximize: false,
    fullscreen: false,
    darkmode: false,
    settings: false,
    window: "main",
  }),
  actions: {
    useFunctions(
      functions: (
        | "close"
        | "minimize"
        | "maximize"
        | "fullscreen"
        | "darkmode"
        | "settings"
      )[],
      method: "show" | "hide"
    ) {
      (
        [
          "close",
          "minimize",
          "maximize",
          "fullscreen",
          "darkmode",
          "settings",
        ] as const
      ).forEach((f) => {
        if (!functions.includes(f)) {
          this[f] = method !== "show";
        } else {
          this[f] = method === "show";
        }
      });
    },
    useWindow(window: string) {
      this.window = window;
    },
  },
});
