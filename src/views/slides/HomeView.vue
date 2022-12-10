<script setup lang="ts">
import { useHeaderStore } from "@/stores/header";

const header = useHeaderStore();

header.usePage("幻灯片");
header.useFunctions([], "hide");

function startCreateSlides() {
  window.zhihui.slides.openCreateSlideWindow();
  console.log("create");
}
</script>

<template>
  <p class="text-2xl">幻灯片</p>
  <br />
  <ElButton>打开</ElButton>
  <ElButton @click="startCreateSlides" type="primary">新建</ElButton>
  <br /><br />
  <p class="text-xl">最近的幻灯片</p>
</template>
