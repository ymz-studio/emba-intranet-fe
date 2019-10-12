export const routeRoles: { [key: string]: string[] } = {
  index: ["STUDENT"],
  admin: ["ADMIN"],
  dashboard: ["STAFF"]
};

export const loginNextRouteName: { [key: string]: string } = {
  STUDENT: "index",
  ADMIN: "admin",
  STAFF: "dashboard"
};
