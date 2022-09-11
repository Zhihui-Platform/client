<script setup lang="ts">
import { useHeaderStore } from "@/stores/header";

const header = useHeaderStore();

header.useWindow("settings");

header.useFunctions(["close", "minimize"], "show");
</script>

<template>
  <p class="text-xl">设置</p>
</template>
