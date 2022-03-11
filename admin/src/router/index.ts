import { createRouter, createWebHistory } from "vue-router";
import { constRouter } from './routers'
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes:constRouter,
});
export default router;
