import { LoginPayload } from "@/modules/auth/auth.interfaces";

export class AuthService {
  /**
   * 获取token
   * @param payload 登录信息
   */
  static async login(payload: LoginPayload) {
    return "";
  }

  /**
   * 已登录用户获取自身信息
   */
  static async auth() {
    return {};
  }
}
