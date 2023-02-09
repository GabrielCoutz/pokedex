import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Detalhes from "../views/Detalhes.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/detalhes",
    name: "Detalhes",
    component: Detalhes,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
