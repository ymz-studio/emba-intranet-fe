import { VuexModule, Module, Mutation, Action } from "vuex-module-decorators";
import store from "@/store";
import { NotificationItem } from "@/modules/basic/basic.interface";
import { BasicService } from "@/modules/basic/basic.service";

@Module({ name: "basic", store, dynamic: true })
export class BasicModule extends VuexModule {
  notifications: NotificationItem[] = [];
  notificationsLoading = false;

  @Mutation
  setNotifications(notifications: NotificationItem[]) {
    this.notifications = notifications;
  }

  @Mutation
  setNotificationsLoading(notificationsLoading: boolean) {
    this.notificationsLoading = notificationsLoading;
  }
}
