export const routeRoles: { [key: string]: string[] } = {
  index: ["STUDENT"],
  course: ["STUDENT"],
  admin: ["ADMIN"],
  dashboard: ["STAFF"]
};

export const loginNextRoutePath: { [key: string]: string } = {
  STUDENT: "/",
  ADMIN: "/admin",
  STAFF: "/dashboard"
};
