<script lang="ts" setup>
import LoginForm from "./forms/login.yaml";
import { ref } from "vue";
import { useHeaderStore } from "@/stores/header";
import { Document } from "@element-plus/icons-vue";
import Doc from "../apis/readme.md";

const header = useHeaderStore();

header.useFunctions(["close", "minimize", "darkmode", "settings"], "show");

const data = ref("");
</script>

<template>
  <div class="text-center">
    <p class="text-4xl pt-12 text-slate-600 dark:text-slate-50">智会平台</p>
    <p class="text-xl pt-3">
      <span class="pl-4 text-right text-slate-500 dark:text-slate-200">
        智而会的校园统筹管理平台<ElButton
          :icon="Document"
          text
          circle
          bg
          @click="useDocument = true"
        />
      </span>
    </p>
    <ZhForm class="pt-12 xl:px-128 lg:px-64 md:px-32" :form="LoginForm" />
  </div>
</template>
