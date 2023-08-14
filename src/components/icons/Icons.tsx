import {
  Bar,
  Download,
  Flag,
  Home,
  Layers,
  Lifebuoy,
  Logout,
  Mail,
  Settings,
  User,
  Plus,
  ChecboxNotCheck,
  Checkboxbase,
  Search,
  Menu,
} from "@assets/icons";
import React, { FC } from "react";

interface IconProps extends React.HTMLAttributes<HTMLElement> {
  name: IconType;
  width?: number;
  height?: number;
  className?: string;
  fill?: string;
}
export type IconType = keyof typeof Icons;
const Icons = {
  bar: <Bar />,
  download: <Download />,
  home: <Home />,
  layers: <Layers />,
  lifebuoy: <Lifebuoy />,
  logout: <Logout />,
  mail: <Mail />,
  setting: <Settings />,
  users: <User />,
  flags: <Flag />,
  plus: <Plus />,
  checkboxNotCheck: <ChecboxNotCheck />,
  checkboxCheck: <Checkboxbase />,
  search: <Search />,
  mobileMenu: <Menu />
};
const Icon: FC<IconProps> = ({ name, className, width = 24, height = 24 }) => {
  // Import or define your SVG icons as React components

  return (
    <>
      {Icons[name]
        ? React.cloneElement(Icons[name], { className, width, height })
        : null}
    </>
  );
};

export default Icon;
