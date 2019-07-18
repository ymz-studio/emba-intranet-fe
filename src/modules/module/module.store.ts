import Vuex from "vuex";
import {
  ModuleInfo,
  ModuleScheduleItem
} from "@/modules/module/module.interfaces";

export const ModuleMutations = {
  SET_CUR_MODULE: "Set currently module info [module]",
  SET_SCHEDULE: "Set module schedule info [module]"
};

export const MiduleActions = {
  SET_CUR_MODULE: "SET_CUR_MODULE",
  SET_SCHEDULE: "SET_SCHEDULE"
};

export const ModuleStore = new Vuex.Store({
  state: {
    curModule: undefined as ModuleInfo | undefined,
    schedule: undefined as ModuleScheduleItem[] | undefined
  }
});
