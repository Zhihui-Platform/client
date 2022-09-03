import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/config",
      component: () => import("../views/ConfigView.vue"),
    },
    {
      path: "/textform",
      component: () => import("../views/FormText.vue"),
    },
    {
      path: "/ops/",
      component: () => import("../views/ops/IndexView.vue"),
    },
    {
      path: "/mdtest",
      component: () => import("../components/articles/ZhArticle.vue"),
    }
  ],
});

export default router;
