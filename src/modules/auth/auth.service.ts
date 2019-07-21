import {
  LoginPayload,
  CurUserInfo,
  NavItem
} from "@/modules/auth/auth.interfaces";
import { AxiosDefault } from "@/plugins/axios";

export class AuthService {
  /**
   * 用户登录, 必须以表单的形式发送
   * 详情见接口: `https://yapi.ymzstudio.com/project/11/interface/api/11`
   * @param payload 登录信息
   */
  static async login(payload: LoginPayload): Promise<CurUserInfo> {
    const formData = new FormData();
    formData.append("username", payload.identity);
    formData.append("password", payload.password);
    formData.append("remembe-me", payload.keep.toString());
    const { data } = await AxiosDefault.post("/api/auth", formData);
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

  static getNavItems(user: CurUserInfo): NavItem[] {
    switch (user.role) {
      case "STUDENT":
        return [
          {
            to: "/module",
            text: "课程信息"
          },
          {
            to: "/user",
            text: "个人中心"
          }
        ];
      default:
        return [];
    }
  }
}
