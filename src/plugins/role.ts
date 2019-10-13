import VueRouterRole from "vue-router-role";
import router from "@/router";
import { AuthModule } from "@/modules/auth/auth.module";
import { getModule } from "vuex-module-decorators";
import { AuthService } from "@/modules/auth/auth.service";
import { routeRoles } from "@/config";
import store from "@/store";

Object.keys(routeRoles).forEach(item => {
  router.resolve({ name: item }).route.meta.roles = routeRoles[item];
});

VueRouterRole({
  router,
  async getRole() {
    const authModule = getModule(AuthModule);
    if (!authModule.me) {
      try {
        store.commit("setLoading", true);
        try {
          authModule.setMe(await AuthService.getAuthInfo());
        } catch (e) {
          // DO NOTHING
        } finally {
          store.commit("setLoading", false);
        }
      } catch (e) {
        return "";
      }
    }
    return authModule.me ? authModule.me.role : "";
  },
  loginPath: "/auth/login"
});
