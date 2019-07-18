export interface LoginPayload {
  identity: string;
  password: string;
  keep: boolean;
}

export interface CurUserInfo {
  username: string;
}
