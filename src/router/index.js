import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/",
      component: () => import("@/views/main")
    },
    {
      path: "/test1",
      component: () => import("@/views/test1")
    }
  ]
});

export default router;
