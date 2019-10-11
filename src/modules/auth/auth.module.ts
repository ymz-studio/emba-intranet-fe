import store from "@/store";
import { AuthInfo } from "@/modules/auth/auth.interface";
import { namespace } from "vuex-class";

export interface AuthStoreState {
  me: AuthInfo | null; // 当前登录的用户信息
}

export namespace AuthStoreMutations {
  export type SetMe = (authInfo: AuthInfo) => void;
}

export const AuthModule = store.registerModule<AuthStoreState>("Auth", {
  namespaced: true,
  state: {
    me: null
  },
  mutations: {
    setMe(state, authInfo: AuthInfo) {
      state.me = authInfo;
    }
  }
});

export const AuthStore = namespace("Auth");
