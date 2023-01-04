import { faker } from "@faker-js/faker/locale/zh_CN";

const deductionStatus = ["none", "pending", "accepted", "rejected"];

// test.js 仅做示例: 通过GET请求返回一个名字数组
export default [
  {
    url: "/v1/class/account/:grade/:class",
    method: "get",
    response: () => {
      return {
        status: 200,
        data: {
          students: faker.datatype.number(50),
          deductions: [0, 0, 0, 0, 0].map(() => ({
            id: "_" + faker.lorem.word(12),
            deductee: faker.name.fullName(),
            deduction: faker.datatype.number({
              min: -0.5,
              max: 0.1,
              precision: 0.05,
            }),
            time: faker.date.past().toLocaleString(),
            reason: faker.lorem.word(4),
            status: deductionStatus[faker.datatype.number(3)],
          })),
        },
      };
    },
  },
];
