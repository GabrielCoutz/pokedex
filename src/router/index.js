import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
// import Detalhes from "../views/Detalhes.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/detalhes/:name",
    component: () => import("../views/Detalhes.vue"),
    name: "Detalhes",
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
