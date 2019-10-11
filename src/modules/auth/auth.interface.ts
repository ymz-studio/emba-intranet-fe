export interface AuthInfo {
  username: string;
  role: string;
}

export interface LoginPayload {
  identity: string;
  password: string;
  keep: boolean;
}
