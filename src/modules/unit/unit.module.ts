import { Module, VuexModule, Mutation } from "vuex-module-decorators";
import store from "@/store";
import { UnitItem } from "@/modules/unit/unit.interface";

@Module({ name: "unit", store, dynamic: true })
export class UnitModule extends VuexModule {
  currentUnit: UnitItem | null = null;

  @Mutation
  setCurrentUnit(unit: UnitItem) {
    this.currentUnit = unit;
  }
}
