import Vuex from "vuex";
import AppStore from "@/store";
import { LoginPayload, CurUserInfo } from "@/modules/auth/auth.interfaces";
import { AuthService } from "@/modules/auth/auth.service";

export const AuthMutations = {
  SET_ME: "Set authorized user info [auth]"
};

export const AuthActions = {
  LOGIN: "LOGIN",
  LOGOUT: "LOGOUT",
  AUTH: "AUTH"
};

export const AuthStore = new Vuex.Store({
  state: {
    me: undefined as CurUserInfo | undefined
  },
  mutations: {
    [AuthMutations.SET_ME](state, payload) {
      state.me = payload;
    }
  },
  actions: {
    // 登录事件
    async [AuthActions.LOGIN](ctx, payload: LoginPayload) {
      const me = await AuthService.login(payload);
      ctx.commit(AuthMutations.SET_ME, me);
    },
    // 登出事件
    async [AuthActions.LOGOUT](ctx) {
      await AuthService.logout();
      ctx.commit(AuthMutations.SET_ME, undefined);
    },
    async [AuthActions.AUTH](ctx) {
      const me = await AuthService.auth();
      ctx.commit(AuthMutations.SET_ME, me);
      return me;
    }
  }
});

function init() {
  // required
  AppStore.registerModule("auth", AuthStore);
}

init();
