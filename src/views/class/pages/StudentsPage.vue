<script lang="ts" setup>
import { ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import {
  ElIcon,
  ElButton,
  ElTable,
  ElTableColumn,
  ElTree,
  ElTabPane,
  ElTabs,
  ElDrawer,
} from "element-plus";
import {
  Plus,
  Delete,
  UserFilled,
  Share,
  Male,
  Female,
  Search,
  Document,
} from "@element-plus/icons-vue";
import { useHeaderStore } from "@/stores/header";
import ComponentDocument from "./documents/students.md";

const header = useHeaderStore();

header.useFunctions(["fullscreen"], "hide");

const route = useRoute();
const router = useRouter();

const active = ref(route.path ?? "list");

watch(active, (value) => {
  router.push(`/class/students/${value}`);
});

const useDocument = ref(false);
</script>

<template>
  <p class="text-2xl">
    学生信息管理
    <ElButton :icon="Document" text circle bg @click="useDocument = true" />
  </p>

  <ElDrawer
    v-model="useDocument"
    size="60%"
    direction="rtl"
    title="学生信息管理文档"
  >
    <ComponentDocument />
  </ElDrawer>
  <ElTabs v-model="active" class="pt-6">
    <ElTabPane label="学生列表" name="list"></ElTabPane>
    <ElTabPane label="团总支管理" name="league"></ElTabPane>
    <ElTabPane label="学生会管理" name="union"></ElTabPane>
    <ElTabPane label="社团管理" name="club"></ElTabPane>
  </ElTabs>
</template>
