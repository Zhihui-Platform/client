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
      path: "/ops/",
      component: () => import("../views/ops/IndexView.vue"),
    },
    {
      path: "/class/",
      components: {
        default: () => import("../views/class/IndexView.vue"),
        SideBar: () => import("../views/class/MenuBar.vue"),
      },
    },
    {
      path: "/class/home",
      components: {
        default: () => import("../views/class/IndexView.vue"),
        SideBar: () => import("../views/class/MenuBar.vue"),
      },
    },
    {
      path: "/class/about",
      components: {
        default: () => import("../views/class/pages/AboutPage.vue"),
        SideBar: () => import("../views/class/MenuBar.vue"),
      },
    },
    {
      path: "/class/home",
      components: {
        default: () => import("../views/class/pages/HomePage.vue"),
        SideBar: () => import("../views/class/MenuBar.vue"),
      },
    },
    {
      path: "/class/students",
      components: {
        default: () => import("../views/class/pages/StudentsPage.vue"),
        SideBar: () => import("../views/class/MenuBar.vue"),
      },
    },
    {
      path: "/class/students/:path?",
      components: {
        default: () => import("../views/class/pages/StudentsPage.vue"),
        SideBar: () => import("../views/class/MenuBar.vue"),
      },
    },
    {
      path: "/class/data",
      components: {
        default: () => import("../views/class/pages/DataPage.vue"),
        SideBar: () => import("../views/class/MenuBar.vue"),
      },
    },
    {
      path: "/class/management",
      components: {
        default: () => import("../views/class/pages/ManagementPage.vue"),
        SideBar: () => import("../views/class/MenuBar.vue"),
      },
    },
    {
      path: "/class/histogram",
      components: {
        default: () => import("../views/class/pages/HistogramPage.vue"),
        SideBar: () => import("../views/class/MenuBar.vue"),
      },
    },
    {
      path: "/class/briefcase",
      components: {
        default: () => import("../views/class/pages/BriefcasePage.vue"),
        SideBar: () => import("../views/class/MenuBar.vue"),
      },
    },
    {
      path: "/:pathMatch(.*)*",
      component: () => import("../views/errors/NotFound.vue"),
    },
  ],
});

export default router;
