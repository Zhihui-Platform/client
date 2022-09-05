<script lang="ts" setup>
import { defineAsyncComponent } from "vue";
import LoadingMarkdown from "./LoadingMarkdown.vue";
import Error from "./Error.vue";

const Example = defineAsyncComponent({
  loader: () => import("./example.md"),
  loadingComponent: LoadingMarkdown,
  errorComponent: Error,
  delay: 200,
  timeout: 3000,
});
</script>

<template>
  <KeepAlive>
    <Component :is="Example" />
  </KeepAlive>
</template>
