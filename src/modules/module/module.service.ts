import { AxiosDefault } from "@/plugins/axios";
import { ModuleScheduleItem, ModuleInfo } from "./module.interfaces";

export class ModuleService {
  // 获取当前的module信息
  static async getModuleInfoNow(): Promise<ModuleInfo> {
    const { data } = await AxiosDefault.get("/api/module/now");
    return data;
  }
  // 获取全部module日程安排
  static async getModuleSchedule(): Promise<ModuleScheduleItem[]> {
    const { data } = await AxiosDefault.get("/api/module/schedule");
    return data;
  }
}
