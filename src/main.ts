import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import ZhForm from "@/components/forms/ZhForm.vue";

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

// @ts-ignore
import Prismjs from "prismjs";

Prismjs.highlightAll();

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.component(ZhForm.name, ZhForm);

app.mount("#app");
