<script lang="ts" setup>
import { useHeaderStore } from "@/stores/header";

const header = useHeaderStore();

header.useFunctions(["fullscreen"], "hide");
</script>

<template>Banji</template>
