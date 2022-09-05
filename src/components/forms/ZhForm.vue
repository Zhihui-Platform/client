<script lang="ts" setup>
import type { ZhForm } from "./ZhForm.d";
import { defineProps, ref, toRefs } from "vue";
import { invoke } from "@tauri-apps/api";

const props = defineProps<{
  form: ZhForm;
}>();

const { form } = toRefs(props);

const result = ref<Record<string, unknown>>({});

form.value.items.forEach((item) => {
  if (
    [
      "text",
      "password",
      "textarea",
      "radios",
      "colorpicker",
      "datepicker",
      "datetimepicker",
      "timepicker",
      "treeselect",
    ].includes(item.type) ||
    (item.type === "cascader" && item.showAllLevels === false)
  ) {
    result.value[item.field] = "";
  } else if (
    [
      "checkboxes",
      "multiselect",
      "multitreeselect",
      "multicascader",
      "daterangepicker",
      "datetimerangepicker",
      "timerangepicker",
    ].includes(item.type) ||
    (item.type === "cascader" && item.showAllLevels === true)
  ) {
    result.value[item.field] = [];
  } else if (["checkbox", "switch"].includes(item.type)) {
    result.value[item.field] = false;
  } else if (["inputnumber", "slider", "rate"].includes(item.type)) {
    result.value[item.field] = 0;
  }
});

function submit() {
  invoke(form.value.command, result.value);
}
</script>

<template>
  <div class="text-center">
    <p class="text-xl">{{ form.title }}</p>
    <ElForm>
      <ElFormItem
        v-for="item in form.items"
        :key="item.field"
        :label="item.prompt"
      >
        <ElInput
          v-if="item.type === 'text'"
          v-model="result[item.field]"
          :show-word-limit="item.showWordLimit"
          :clearable="item.clearable"
          :placeholder="item.placeholder"
        />
        <ElInput
          v-else-if="item.type === 'textarea'"
          v-model="result[item.field]"
          type="textarea"
          :rows="item.rows"
          :clearable="item.clearable"
          :placeholder="item.placeholder"
        />
        <ElInput
          v-else-if="item.type === 'password'"
          type="password"
          v-model="result[item.field]"
          :show-password="item.showPassword"
          :clearable="item.clearable"
          :placeholder="item.placeholder"
        />
        <ElCheckbox
          v-else-if="item.type === 'checkbox'"
          v-model="result[item.field]"
          :border="item.border"
          :label="item.label"
        />
        <ElCheckboxGroup
          v-else-if="item.type === 'checkboxes' && !item.button"
          v-model="result[item.field]"
          :min="item.min"
          :max="item.max"
        >
          <ElCheckbox
            v-for="box in item.labels"
            :key="box.value"
            :label="box.value"
            :border="item.border"
            :disabled="box.disabled"
          >
            {{ box.label }}
          </ElCheckbox>
        </ElCheckboxGroup>
        <ElCheckboxGroup
          v-else-if="item.type === 'checkboxes' && item.button"
          v-model="result[item.field]"
          :min="item.min"
          :max="item.max"
        >
          <ElCheckboxButton
            v-for="box in item.labels"
            :key="box.value"
            :label="box.value"
            :disabled="box.disabled"
          >
            {{ box.label }}
          </ElCheckboxButton>
        </ElCheckboxGroup>
        <ElRadioGroup
          v-if="item.type === 'radios' && !item.button"
          v-model="result[item.field]"
        >
          <ElRadio
            v-for="box in item.labels"
            :key="box.value"
            :label="box.value"
            :border="item.border"
            :disabled="box.disabled"
          >
            {{ box.label }}
          </ElRadio>
        </ElRadioGroup>
        <ElRadioGroup
          v-if="item.type === 'radios' && item.button"
          v-model="result[item.field]"
        >
          <ElRadioButton
            v-for="box in item.labels"
            :key="box.value"
            :label="box.value"
            :disabled="box.disabled"
          >
            {{ box.label }}
          </ElRadioButton>
        </ElRadioGroup>
        <ElColorPicker
          v-if="item.type === 'colorpicker'"
          v-model="result[item.field]"
          :show-alpha="item.alpha"
        />
        <ElDatePicker
          v-if="item.type === 'datepicker'"
          v-model="result[item.field]"
          lass="w-full"
          :type="item.object"
          :placeholder="item.placeholder"
          :format="item.format"
        />
        <ElDatePicker
          v-if="item.type === 'daterangepicker'"
          v-model="result[item.field]"
          :type="item.object + 'range'"
          :start-placeholder="item.startPlaceholder"
          :end-placeholder="item.endPlaceholder"
          :range-separator="item.rangeSeparator"
          :format="item.format"
        />
        <ElTimePicker
          v-if="item.type === 'timepicker'"
          v-model="result[item.field]"
          class="w-full"
          :placeholder="item.placeholder"
          :format="item.format"
        />
        <ElTimePicker
          v-if="item.type === 'timerangepicker'"
          v-model="result[item.field]"
          is-range
          :start-placeholder="item.startPlaceholder"
          :end-placeholder="item.endPlaceholder"
          :range-separator="item.rangeSeparator"
          :format="item.format"
        />
        <ElInputNumber
          v-if="item.type === 'inputnumber'"
          v-model="result[item.field]"
          class="w-full"
          :min="item.min"
          :max="item.max"
          :step="item.step"
          :precision="item.precision"
          :controls="item.controls"
          :controls-position="item.controlsRightPosition ? 'right' : undefined"
          :placeholder="item.placeholder"
        />
        <ElRate
          v-if="item.type === 'rate'"
          v-model="result[item.field]"
          :allow-half="item.allowHalf"
        />
        <ElSelect
          v-if="item.type === 'select'"
          v-model="result[item.field]"
          class="w-full"
          :filterable="item.filterable"
          :placeholder="item.placeholder"
        >
          <ElOption
            v-for="option in item.options"
            :key="option.value"
            :value="option.value"
            :label="option.label"
            :disabled="option.disabled"
          />
        </ElSelect>
        <ElSelect
          v-if="item.type === 'multiselect'"
          v-model="result[item.field]"
          multiple
          class="w-full"
          :placeholder="item.placeholder"
          :clearable="item.clearable"
          :collapse-tags="item.collapsed"
          :collapse-tags-tooltip="item.tooltip && item.collapsed"
          :filterable="item.filterable"
          :allow-create="item.filterable && item.allowCreate"
          :multiple-limit="item.limit"
        >
          <ElOption
            v-for="option in item.options"
            :key="option.value"
            :value="option.value"
            :label="option.label"
            :disabled="option.disabled"
          />
        </ElSelect>
        <ElTreeSelect
          v-if="item.type === 'treeselect'"
          v-model="result[item.field]"
          class="w-full"
          :placeholder="item.placeholder"
          :data="item.options"
          :show-checkbox="item.checkbox"
          :check-strictly="item.anyLevel && item.checkbox"
          :check-on-click-node="
            item.checkOnClickNode && item.anyLevel && item.checkbox
          "
          :filterable="item.filterable"
        />
        <ElTreeSelect
          v-if="item.type === 'multitreeselect'"
          v-model="result[item.field]"
          class="w-full"
          :placeholder="item.placeholder"
          multiple
          :data="item.options"
          :clearable="item.clearable"
          :show-checkbox="item.checkbox"
          :check-strictly="item.anyLevel && item.checkbox"
          :check-on-click-node="
            item.checkOnClickNode && item.anyLevel && item.checkbox
          "
          :collapse-tags="item.collapsed"
          :collapse-tags-tooltip="item.tooltip && item.collapsed"
          :filterable="item.filterable"
          :multiple-limit="item.limit"
        />
        <ElSlider
          v-if="item.type === 'slider'"
          v-model="result[item.field]"
          :marks="item.marks"
          :step="item.step"
          :placement="item.placement"
          :show-stop="item.showStep"
          :show-tooltip="item.tooltip"
          :show-input="item.showInput"
          :show-input-controls="item.showInputControls"
        />
        <ElSlider
          v-if="item.type === 'rangeslider'"
          v-model="result[item.field]"
          range
          :marks="item.marks"
          :step="item.step"
          :placement="item.placement"
          :show-stop="item.showStep"
        />
        <ElSwitch
          v-if="item.type === 'switch'"
          v-model="result[item.field]"
          :active-text="item.activeLabel"
          :inactive-text="item.inactiveLabel"
        />
      </ElFormItem>
      <ElButton class="w-full" text bg type="primary" @click="submit">
        提交
      </ElButton>
    </ElForm>
  </div>
</template>
