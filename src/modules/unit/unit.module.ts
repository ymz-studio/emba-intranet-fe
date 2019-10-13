import { Module, VuexModule } from "vuex-module-decorators";
import store from "@/store";

@Module({ name: "unit", store, dynamic: true })
export class UnitModule extends VuexModule {}
