<script lang="ts" setup>
/* global defineProps */
import { compile } from "./compiler";
import Prismjs from "prismjs";
import { onMounted } from "vue";

const props = defineProps<{
  text: string;
}>();

const content = compile(props.text);

console.log(content);
onMounted(() => {
  Prismjs.highlightAll();
});
</script>

<template>
  <div class="vp-doc" v-html="content"></div>
</template>

<style scoped>
.vp-doc {
  user-select: text;
}
</style>
