import Vuex from "vuex";
import { UserService } from "@/modules/user/user.service";
import AppStore from "@/store";
import { UserCourse } from "@/modules/user/user.interfaces";

export const UserMutations = {
  SET_COURSES: "Set course info of authorized user currently [User]"
};

export const UserActions = {
  LOAD_COURSES: "LOAD_COURSES"
};

export const UserStore = new Vuex.Store({
  state: {
    courses: undefined as undefined | UserCourse[]
  },
  mutations: {
    [UserMutations.SET_COURSES](state, payload) {
      state.courses = payload;
    }
  },
  actions: {
    async [UserActions.LOAD_COURSES](ctx) {
      const courses = await UserService.getUserCourses();
      ctx.commit(UserMutations.SET_COURSES, courses);
    }
  }
});

function init() {
  AppStore.registerModule("user", UserStore);
  UserStore.dispatch(UserActions.LOAD_COURSES);
}

init();
