import { defineStore } from "pinia";
import type { Sidebar } from "./sidebar.d";

export const useSidebarStore = defineStore({
  id: "sidebar",
  state: () => ({
    sidebar: [] as Sidebar,
    show: false,
  }),
  actions: {
    setSidebar(sidebar: Sidebar | false) {
      if (sidebar) {
        this.sidebar = sidebar;
        this.show = true;
      } else {
        this.show = false;
      }
    },
  },
});
