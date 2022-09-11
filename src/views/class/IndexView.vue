<script lang="ts" setup>
import { useHeaderStore } from "@/stores/header";

const header = useHeaderStore();

header.useFunctions(['fullscreen'], "hide");
</script>

<template lang="pug">
h2(class=['text-2xl']) 班级首页

br

span(class=['text-xl']) 课程列表
</template>
