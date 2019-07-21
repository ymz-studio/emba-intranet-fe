import Vue from "vue";
import Router from "vue-router";
import routes from "vue-auto-routing";
import { createRouterLayout } from "vue-router-layout";
import { AuthStore, AuthActions } from "@/modules/auth/auth.store";
import Nprogress from "nprogress";
import { AxiosResponse } from "axios";

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
  try {
    const me =
      AuthStore.state.me || (await AuthStore.dispatch(AuthActions.AUTH));
    if (to.name === "login") {
      next("/");
    } else {
      next();
    }
  } catch (error) {
    const res = error.response as AxiosResponse;
    if (res.status === 401) {
      if (to.name !== "login") {
        next({
          name: "login",
          query: {
            next: to.fullPath
          }
        });
      } else {
        next();
      }
    }
  } finally {
    Nprogress.done();
  }
});

export default router;
