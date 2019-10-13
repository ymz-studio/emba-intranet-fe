import { Axios } from "@/plugins/axios";
import { UnitItem } from "@/modules/unit/unit.interface";

export class UnitService {
  static async getCurrentUnit(): Promise<UnitItem> {
    const { data } = await Axios.get("/api/module/now");
    return data;
  }
}
