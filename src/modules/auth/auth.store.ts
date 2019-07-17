import Vuex from "vuex";
import AppStore from "@/store";

export const AuthMutations = {
  SET_ME: "Set authorized user info [Auth]"
};

export const AuthStore = new Vuex.Store({
  state: {
    me: undefined
  },
  mutations: {
    [AuthMutations.SET_ME](state, payload) {
      state.me = payload;
    }
  }
});

function init() {
  // required
  AppStore.registerModule("auth", AuthStore);
}

init();
