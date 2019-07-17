import Vuex from "vuex";
import AppStore from "@/store";
import { LoginPayload } from "@/modules/auth/auth.interfaces";
import { AuthService } from "@/modules/auth/auth.service";

export const AuthMutations = {
  SET_ME: "Set authorized user info [auth]"
};

export const AuthActions = {
  LOGIN: "LOGIN",
  LOGOUT: "LOGOUT"
};

const TOKEN_STORAGE_KEY = "token"; // localStorage中存储token的字段

export const AuthStore = new Vuex.Store({
  state: {
    me: undefined
  },
  mutations: {
    [AuthMutations.SET_ME](state, payload) {
      state.me = payload;
    }
  },
  actions: {
    // 登录事件
    async [AuthActions.LOGIN](ctx, payload: LoginPayload) {
      const token = await AuthService.login(payload);
      localStorage.setItem(TOKEN_STORAGE_KEY, token);
      const user = await AuthService.auth();
      ctx.commit(AuthMutations.SET_ME, user);
    },
    // 登出事件
    async [AuthActions.LOGOUT](ctx) {
      localStorage.removeItem(TOKEN_STORAGE_KEY);
      ctx.commit(AuthMutations.SET_ME, undefined);
    }
  }
});

function init() {
  // required
  AppStore.registerModule("auth", AuthStore);
}

init();
