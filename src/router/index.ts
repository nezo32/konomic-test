import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Stock Glass",
      component: () => import("../views/StockGlass.vue"),
    },
    {
      path: "/list",
      name: "List",
      component: () => import("../views/List.vue"),
    }
  ],
});

export default router;
