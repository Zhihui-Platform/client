<script lang="ts" setup>
import testform from "./forms/test.yaml";
const text = `
# Hello, world!
We're now at ...

::: tip x
sss
:::

|x|y|z|
|--|--|--|
|1|2|3|

\`\`\`ts{34}
import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import ZhForm from "@/components/forms/ZhForm.vue";
import ZhArticle from "@/components/articles/ZhArticle.vue";

import "./assets/style.less";

// import "./assets/main.css";
import "./index.css";

import "vitepress/dist/client/theme-default/styles/base.css";
import "vitepress/dist/client/theme-default/styles/vars.css";
import "vitepress/dist/client/theme-default/styles/utils.css";
import "vitepress/dist/client/theme-default/styles/fonts.css";
import "vitepress/dist/client/theme-default/styles/components/custom-block.css";
import "vitepress/dist/client/theme-default/styles/components/vp-code.css";
import "vitepress/dist/client/theme-default/styles/components/vp-doc.css";
import "vitepress/dist/client/theme-default/styles/components/vp-sponsor.css";

import "element-plus/theme-chalk/index.css";
import "element-plus/theme-chalk/dark/css-vars.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.component(ZhForm.name, ZhForm);
app.component(ZhArticle.name, ZhArticle);

app.mount("#app");
\`\`\`

==H_2_O==

$H_2O$
`;
</script>

<template>
  <ZhForm :form="testform"></ZhForm>
  <ZhArticle contenteditable :text="text"></ZhArticle>
</template>
