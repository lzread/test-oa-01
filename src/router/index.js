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
    },
    {
      path: "/test2",
      component: () => import("@/views/test2")
    },
    {
      path: "/test3",
      component: () => import("@/views/test3")
    }
  ]
});

export default router;
