import { defineStore } from "pinia";

export const useClassData = defineStore({
  id: "classData",
  state: () => ({
    gradeid: 0,
    classid: 0,
    classname: "",
    account: "",
    students: 0,
  }),
  actions: {},
});
