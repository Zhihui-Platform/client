export interface ZhTextFormItem {
  type: "text";
  showWordLimit?: boolean;
}

export interface ZhPasswordFormItem {
  type: "password";
  showPassword?: boolean;
}

export interface ZhTextareFormItem {
  type: "textarea";
  showWordLimit?: boolean;
  rows?: number;
}

export type ZhInputFormItem = (
  | ZhTextFormItem
  | ZhTextareFormItem
  | ZhPasswordFormItem
) & {
  value: string;
  maxlength?: number;
  minlength?: number;
  placeholder?: string;
  clearable?: boolean;
};

export interface ZhCheckboxFormItem {
  type: "checkbox";
  border: boolean;
  value: boolean;
  label: string;
}

export interface ZhCheckboxesFormItem {
  type: "checkboxes";
  button?: boolean;
  border: boolean;
  labels: { label: string; value: string; disabled: boolean }[];
  value: string[];
  min?: number;
  max?: number;
}

export interface ZhRadiosFormItem {
  type: "radios";
  button?: boolean;
  border?: boolean;
  labels: { label: string; value: string; disabled: boolean }[];
  value: string;
}

export interface ZhColorPickerFormItem {
  type: "colorpicker";
  value: string;
  alpha?: boolean;
}

export interface ZhDatePickerFormItem {
  type: "datepicker";
  value: string;
  object: "date" | "week" | "month" | "year" | "datetime";
  placeholder?: string;
  format?: string;
}

export interface ZhDateRangePickerFormItem {
  type: "daterangepicker";
  value: [string, string];
  object: "date" | "datetime";
  startPlaceholder?: string;
  endPlaceholder?: string;
  rangeSeparator?: string;
  format?: string;
}

export interface ZhTimePickerFormItem {
  type: "timepicker";
  value: string;
  placeholder?: string;
  format?: string;
}

export interface ZhTimeRangePickerFormItem {
  type: "timerangepicker";
  value: [string, string];
  startPlaceholder?: string;
  endPlaceholder?: string;
  rangeSeparator?: string;
  format?: string;
}

export interface ZhInputNumberFormItem {
  type: "inputnumber";
  min: number;
  max: number;
  step?: number;
  precision?: number;
  controls?: boolean;
  controlsRightPosition?: boolean;
  placeholder?: string;
  value: number;
}

export interface ZhRateFormItem {
  type: "rate";
  allowHalf?: boolean;
  value: number;
}

export interface ZhSelectFormItem {
  type: "select";
  options: { label: string; value: string; disabled: boolean }[];
  value: string;
  placeholder?: string;
  filterable?: boolean;
}

export interface ZhMultiSelectFormItem {
  type: "multiselect";
  value: string[];
  options: { label: string; value: string; disabled: boolean }[];
  clearable?: boolean;
  collapsed?: boolean;
  tooltip?: boolean;
  placeholder?: string;
  filterable?: boolean;
  allowCreate?: boolean;
  limit?: number;
}

interface Tree {
  label: string;
  value: string;
  children?: Tree[];
  disabled?: string;
}

export interface ZhTreeSelectFormItem {
  type: "treeselect";
  options: Tree[];
  checkbox?: boolean;
  anyLevel?: boolean;
  placeholder?: string;
  checkOnClickNode?: boolean;
  filterable?: boolean;
  value: string;
  clearable?: boolean;
}

export interface ZhMultiTreeSelectFormItem {
  type: "multitreeselect";
  options: Tree[];
  checkbox?: boolean;
  anyLevel?: boolean;
  placeholder?: string;
  filterable?: boolean;
  value: string[];
  clearable?: boolean;
  collapsed?: boolean;
  checkOnClickNode?: boolean;
  tooltip?: boolean;
  filterable?: boolean;
  limit?: number;
}

export type ZhCascaderFormItem =
  | {
      type: "cascader";
      options: Tree[];
      value: string;
      clearable?: boolean;
      showAllLevels: true;
    }
  | {
      type: "cascader";
      options: Tree[];
      value: string[];
      clearable?: boolean;
      showAllLevels: false;
    };

export type ZhMultiCascaderFormItem =
  | {
      type: "multicascader";
      options: Tree[];
      value: string[];
      clearable?: boolean;
      showAllLevels: true;
    }
  | {
      type: "multicascader";
      options: Tree[];
      value: string[][];
      clearable?: boolean;
      showAllLevels: false;
    };

export interface ZhSliderFormItem {
  type: "slider";
  value: number;
  marks?: Record<number, string>;
  step?: number;
  placement?: "top" | "bottom" | "right" | "left";
  showStep?: boolean;
  tooltip?: boolean;
  showInput?: boolean;
  showInputControls?: boolean;
}

export interface ZhRangeSliderFormItem {
  type: "rangeslider";
  value: [number, number];
  placement?: "top" | "bottom" | "right" | "left";
  showStep?: boolean;
  marks?: Record<number, string>;
  step?: number;
}

export interface ZhSwitchFormItem {
  type: "switch";
  value: boolean;
  activeLabel: string;
  inactiveLabel: string;
}

export interface ZhTransferFormItem {
  type: "transfer";
  value: number[];
  titles?: [string, string];
  buttonTexts?: [string, string];
}

export type ZhFormItem = (
  | ZhInputFormItem
  | ZhCheckboxFormItem
  | ZhCheckboxesFormItem
  | ZhRadiosFormItem
  | ZhColorPickerFormItem
  | ZhDatePickerFormItem
  | ZhDateRangePickerFormItem
  | ZhTimePickerFormItem
  | ZhTimeRangePickerFormItem
  | ZhInputNumberFormItem
  | ZhRateFormItem
  | ZhSelectFormItem
  | ZhMultiSelectFormItem
  | ZhTreeSelectFormItem
  | ZhMultiTreeSelectFormItem
  | ZhCascaderFormItem
  | ZhMultiCascaderFormItem
  | ZhSliderFormItem
  | ZhRangeSliderFormItem
  | ZhSwitchFormItem
  | ZhTransferFormItem
) & {
  field: string;
  disabled?: boolean;
  prompt: string;
};

export interface ZhForm {
  items: Array<ZhFormItem>;
  title: string;
  command: string;
}
