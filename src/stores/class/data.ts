import { defineStore } from "pinia";
import axios from "@/plugins/axios";

export const useClassData = defineStore({
  id: "classData",
  state: () => ({
    students: 0,
    deductions: [] as DeductionTable[],
    gradeid: 0,
    classid: 0,
  }),
  actions: {
    async setClassData(gradeid: number, classid: number) {
      this.gradeid = gradeid;
      this.classid = classid;
      const res = await axios({
        url: `/v1/class/account/${gradeid}/${classid}`,
      });
      console.log("res", res, res.data.data);
      this.students = res.data.data.students;
      this.deductions = res.data.data.deductions;
    },
    async getDetail(id: string, type: string) {
      const res = await axios({
        url: `/v1/class/data/${this.gradeid}/${this.classid}/${type}/${id}`,
      });
      return res.data.data;
    }
  },
});
