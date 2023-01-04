<script lang="ts" setup>
import { useHeaderStore } from "@/stores/header";
import { ElDivider, ElCard, ElRow, ElCol } from "element-plus";
import { useClassData } from "@/stores/class/data";
import ZhDataDeduction from "@/components/data/ZhDataDeduction.vue";

const classData = useClassData();

(async () => {
  await classData.setClassData(2020, 11);
  console.log(classData);
})();

const header = useHeaderStore();

header.useFunctions(["fullscreen"], "hide");

async function getDetail(id: string) {
  return await classData.getDetail(id, "deduction");
}
</script>

<template>
  <p class="text-2xl">你好，{{ classData.classid }} 班</p>

  <ElDivider />

  <p class="text-ml">近期扣分</p>
  <ZhDataDeduction :deductions="classData.deductions" :get-detail="getDetail" />
</template>
