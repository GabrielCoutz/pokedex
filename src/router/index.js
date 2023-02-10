import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Home.vue"),
  },
  {
    path: "/detalhes/:name",
    component: () => import("@/views/Detalhes.vue"),
    name: "Detalhes",
    props: true,
  },
  {
    path: "/:catchAll(.*)",
    name: "NaoEncontrado",
    component: () => import("@/views/NaoEncontrado.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
