/**
 * @interface ClassHomeData
 * @description 班级主页数据
 * @property {number} students 班级学生人数
 */
declare interface ClassHomeData {
  students: number;
  deductions: Deduction[]; // 5 Recent Deductions
}
