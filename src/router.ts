import Vue from "vue";
import Router from "vue-router";
import routes from "vue-auto-routing";
import { createRouterLayout } from "vue-router-layout";
import { AuthStore, AuthActions } from "@/modules/auth/auth.store";
import Nprogress from "nprogress";

const RouterLayout = createRouterLayout(layout => {
  return import(`@/layouts/${layout}.vue`);
});

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/",
      component: RouterLayout,
      children: routes
    }
  ]
});

router.beforeEach(async (to, from, next) => {
  Nprogress.start();
  let me = AuthStore.state.me;
  if (!me) {
    me = await AuthStore.dispatch(AuthActions.AUTH);
  }
  if (!me && to.name !== "login") {
    next({
      name: "login",
      query: {
        next: to.fullPath
      }
    });
  } else if (me && to.name === "login") {
    next("/");
  } else {
    next();
  }
  Nprogress.done();
});

export default router;
