<script lang="ts" setup>
import { PrismEditor } from "vue-prism-editor";
import "vue-prism-editor/dist/prismeditor.min.css";
import { highlight, languages } from "prismjs";
import "prismjs/components/prism-markdown";
// import "prismjs/themes/prism-tomorrow.css";
import { ref } from "vue";

const highlighter = (code: string) => {
  return highlight(code, languages.markdown, "markdown");
};

const codes = ref("# Hello, world!");
</script>

<template>
  <!--  <PrismEditor-->
  <!--    class="my-editor font-mono"-->
  <!--    v-model="codes"-->
  <!--    :highlight="highlighter"-->
  <!--    line-numbers-->
  <!--  />-->
  <textarea class="w-full"></textarea>
</template>

<style>
/* required class */
.my-editor {
  /* we dont use `language-` classes anymore so thats why we need to add background and text color manually */
  background: #ffffff;
  color: #2e2e2e;

  /* you must provide font-family font-size line-height. Example: */
  font-family: Fira code, Fira Mono, Consolas, Menlo, Courier, monospace;
  font-size: 14px;
  line-height: 1.5;
  padding: 5px;
}

/* optional class for removing the outline */
.prism-editor__textarea:focus {
  outline: none;
}
</style>
