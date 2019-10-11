import VueRouterRole from "vue-router-role";
import router from "@/router";
import { AuthModule } from "@/modules/auth/auth.module";
import { getModule } from "vuex-module-decorators";
import { AuthService } from "@/modules/auth/auth.service";
import { routeRoles } from "@/config";

Object.keys(routeRoles).forEach(item => {
  router.resolve({ name: item }).route.meta.roles = routeRoles[item];
});

VueRouterRole({
  router,
  async getRole() {
    const Auth = getModule(AuthModule);
    if (!Auth.me) {
      try {
        Auth.setMe(await AuthService.getAuthInfo());
      } catch (e) {
        return "";
      }
    }
    return Auth.me ? Auth.me.role : "";
  },
  loginPath: "/auth/login"
});
