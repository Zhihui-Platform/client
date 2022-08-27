import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import ZhForm from "@/components/forms/ZhForm.vue";

// import "./assets/main.css";
import "./index.css";

import "element-plus/theme-chalk/index.css";
import "element-plus/theme-chalk/dark/css-vars.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.component(ZhForm.name, ZhForm);

app.mount("#app");
