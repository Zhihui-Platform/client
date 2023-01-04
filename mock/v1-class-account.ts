import Mock from "mockjs";

Mock.mock("/api/v1/class/account/2020/11", "get", (opt) => {
  console.log(opt);
});
