import { defineStore } from "pinia";

export const useMenuStatus = defineStore({
  id: "menuStatus",
  state: () => ({
    expanded: false, // When hovered, the menu will be expanded
    small: false, // When the window is small, the menu will be small
  }),
  actions: {
    useExpanded(expanded: boolean) {
      this.expanded = expanded;
    },
    useSmall(small: boolean) {
      this.small = small;
    },
  },
});
