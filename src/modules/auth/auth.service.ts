import { AuthInfo, LoginPayload } from "@/modules/auth/auth.interface";
import { Axios } from "@/plugins/axios";
export class AuthService {
  static async getAuthInfo(): Promise<AuthInfo> {
    const { data } = await Axios.get("/api/auth");
    return data;
  }
  static async login(payload: LoginPayload): Promise<void> {
    const { data } = await Axios.post("/api/auth", payload);
    return data;
  }
}
