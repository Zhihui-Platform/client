/**
 * @interface ClassHomeData
 * @description 班级主页数据
 * @property {number} gradeid 年级 ID
 * @property {number} classid 班级 ID
 * @property {string} classname 班级名称
 * @property {string} account 班级账号
 * @property {number} students 班级学生人数
 */
declare interface ClassHomeData {
  gradeid: number;
  classid: number;
  classname: string;
  account: string;
  students: number;
}
