type group = "main" | "others";
interface Route {
  name: string;
  path: string;
  icon: string;
}
type RouteGroup = Record<group, Array<Route>>;

export const routes: RouteGroup = {
  main: [
    { name: "Home", path: "/", icon: "" },
    {
      name: "Dashboard",
      path: "/",
      icon: "",
    },
    {
      name: "Projects",
      path: "/",
      icon: "",
    },
    {
      name: "Tasks",
      path: "/",
      icon: "",
    },
    {
      name: "Home",
      path: "/",
      icon: "",
    },
  ],
  others: [
    {
      name: "Support",
      path: "/",
      icon: "",
    },
    {
      name: "Settings",
      path: "/",
      icon: "",
    },
  ],
};
