import { NotificationItem } from "@/modules/basic/basic.interface";
import { Axios } from "@/plugins/axios";

export class BasicService {
  static async getUserNotifications(): Promise<NotificationItem[]> {
    const { data } = await Axios.get("/api/user/notifications");
    return data;
  }
}
