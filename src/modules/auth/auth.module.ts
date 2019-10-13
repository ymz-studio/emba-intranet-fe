import { VuexModule, Module, Mutation } from "vuex-module-decorators";
import { AuthInfo } from "@/modules/auth/auth.interface";
import store from "@/store";

@Module({ name: "auth", store, dynamic: true })
export class AuthModule extends VuexModule {
  me: AuthInfo | null = null;

  @Mutation
  setMe(payload: AuthInfo) {
    this.me = payload;
  }
}
