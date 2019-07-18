import { LoginPayload, CurUserInfo } from "@/modules/auth/auth.interfaces";
import { AxiosDefault } from "@/plugins/axios";

export class AuthService {
  /**
   * 获取token
   * @param payload 登录信息
   */
  static async login(payload: LoginPayload): Promise<CurUserInfo> {
    const { data } = await AxiosDefault.post("/api/auth", payload);
    return data;
  }

  /**
   * 清除用户cookie中的登录信息
   */
  static async logout() {
    await AxiosDefault.delete("/api/auth");
  }

  /**
   * 已登录用户获取自身信息
   */
  static async auth(): Promise<CurUserInfo> {
    const { data } = await AxiosDefault.get("/api/auth");
    return data;
  }
}
