import { createWebHistory, createRouter } from "vue-router";
import HomeView from "../views/HomeView.vue";
import leaveContent from "../views/leaveContent.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/leave-content", component: leaveContent },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior: (to, from, savedPosition) => {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

export default router;
