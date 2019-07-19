import { AxiosDefault } from "@/plugins/axios";
import { UserCourse } from "@/modules/user/user.interfaces";

export class UserService {
  static async getUserCourses(): Promise<UserCourse[]> {
    const { data } = await AxiosDefault.get("/api/user/courses");
    return data;
  }
}
