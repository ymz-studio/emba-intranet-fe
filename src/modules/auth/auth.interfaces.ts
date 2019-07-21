import { RawLocation } from "vue-router";

export interface LoginPayload {
  identity: string;
  password: string;
  keep: boolean;
}

export interface CurUserInfo {
  username: string;
  role: "STUDENT" | "FACULTY" | "STAFF" | "ADMIN";
}

export interface NavItem {
  to: RawLocation;
  text: string;
}
