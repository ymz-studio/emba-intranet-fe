import { Course } from "@/modules/module/module.interfaces";

export interface UserEntity {
  username?: string;
}

export interface UserCourse extends Course {
  isCompleted?: boolean;
}
