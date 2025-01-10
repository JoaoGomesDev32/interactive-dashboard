import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from "@/views/Dashboard.vue"; // Usando @ para referenciar src

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
