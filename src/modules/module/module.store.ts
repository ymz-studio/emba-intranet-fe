import Vuex from "vuex";
import {
  ModuleInfo,
  ModuleScheduleItem
} from "@/modules/module/module.interfaces";
import { ModuleService } from "./module.service";
import AppStore from "@/store";

export const ModuleMutations = {
  SET_CUR_MODULE: "Set currently module info [module]",
  SET_SCHEDULE: "Set module schedule info [module]"
};

export const ModuleActions = {
  LOAD_CUR_MODULE: "LOAD_CUR_MODULE",
  LOAD_SCHEDULE: "LOAD_SCHEDULE"
};

export const ModuleStore = new Vuex.Store({
  state: {
    curModule: undefined as ModuleInfo | undefined,
    schedule: undefined as ModuleScheduleItem[] | undefined
  },
  mutations: {
    // 设置日程表信息
    [ModuleMutations.SET_SCHEDULE](state, payload) {
      state.schedule = payload;
    },
    // 设置当前模块信息
    [ModuleMutations.SET_CUR_MODULE](state, payload) {
      state.schedule = payload;
    }
  },
  actions: {
    async [ModuleActions.LOAD_SCHEDULE](ctx) {
      const schedule = await ModuleService.getModuleSchedule();
      ctx.commit(ModuleMutations.SET_SCHEDULE, schedule);
    },
    async [ModuleActions.LOAD_CUR_MODULE](ctx) {
      const module = await ModuleService.getModuleInfoNow();
      ctx.commit(ModuleMutations.SET_CUR_MODULE, module);
    }
  }
});

function init() {
  AppStore.registerModule("module", ModuleStore);
}

init();
