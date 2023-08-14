import { IconType } from "@components/icons/Icons";

type group = "main" | "others";
interface Route {
  name: string;
  path: string;
  icon: IconType;
  badge?: boolean;
}
type RouteGroup = Record<group, Array<Route>>;

export const routes: RouteGroup = {
  main: [
    { name: "Home", path: "/home", icon: "home" },
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: "bar",
      badge: true,
    },
    {
      name: "Projects",
      path: "/projects",
      icon: "layers",
    },
    {
      name: "Tasks",
      path: "/tasks",
      icon: "layers",
    },
    {
      name: "Reporting",
      path: "/reporting",
      icon: "flags",
    },
    {
      name: "Users",
      path: "/users",
      icon: "users",
    },
  ],
  others: [
    {
      name: "Support",
      path: "/support",
      icon: "lifebuoy",
    },
    {
      name: "Settings",
      path: "/settings",
      icon: "setting",
    },
  ],
};
