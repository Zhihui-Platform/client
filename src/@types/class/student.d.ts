/**
 * @interface StudentPage
 * @description 学生基础信息
 * @property {number} id 学生id
 * @property {string} name 学生姓名
 */
declare interface StudentPane {
  id: number;
  name: string;
}

/**
 * @interface StudentTablePane
 * @description 学生表格信息，扩展自 StudentPane
 * @property {1 | 0} sex 学生性别，1 为男，0 为女
 * @property {number} volunteer 学生义工时间，以小时为单位
 * @property {"none" | "pre" | "member"} league 学生团员面貌，none 为无，pre 为预备团员，member 为已入团
 * @property {string} union 学生所属学生会部门
 * @property {string[]} club 学生所属社团，可多选
 * @extends StudentPane
 */
declare interface StudentTablePane extends StudentPane {
  sex: 1 | 0;
  volunteer: number;
  league: "none" | "pre" | "member";
  union: string | null;
  club: string[];
}

/**
 * @interface StudentLeaguePane
 * @description 学生团员信息，扩展自 StudentPane
 * @property {"none" | "pre" | "member" | "secretary"} position 学生团员职位，none 为无，pre 为预备团员，member 为已入团，secretary 为团支书
 * @extends StudentPane
 */
declare interface StudentLeaguePane extends StudentPane {
  position: "none" | "pre" | "member" | "secretary";
}

/**
 * @interface StudentUnionPane
 * @description 学生学生会信息，扩展自 StudentPane
 * @property {string} department 学生所属学生会部门
 * @property {string} position 学生学生会职位，register 为注册成员，member 为正式成员，secretary 为部长，vice_secretary 为副部长，chairman 为主席，vice_chairman 为副主席，minister 为部长，vice_minister 为副部长
 * @property {string} group 学生所属部门小组
 * @extends StudentPane
 */
declare interface StudentUnionPane extends StudentPane {
  department: string;
  position:
    | "register"
    | "member"
    | "secretary"
    | "vice_secretary"
    | "chairman"
    | "vice_chairman"
    | "minister"
    | "vice_minister";
  group: string;
}

/**
 * @interface StudentClubPane
 * @description 学生社团信息，扩展自 StudentPane
 * @property {string} club 学生所属社团
 * @property {string} group 学生所属社团小组
 * @extends StudentPane
 */
declare interface StudentClubPane extends StudentPane {
  club: string;
  group?: string;
}
