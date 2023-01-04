import axios from "@/plugins/axios";

export function getClassAccount(gradeid: string, classid: string) {
  return axios({
    url: `/class/account/${gradeid}/${classid}`,
    method: "get",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
}
