import { FC, useContext } from "react";
import Logo from "@assets/images/Logo.png";
import Icon from "@components/icons/Icons";
import { MobileNavContext } from "../Layout";

const MobileHeader: FC = () => {
  const { toggle, open } = useContext(MobileNavContext)
  return (
    <div className="sidebar-logo lg:hidden flex py-2 px-3 justify-between items-center">
      <div className="">
        <img src={Logo} />
      </div>
      <div onClick={() => toggle(!open)}>
        <Icon name="mobileMenu" />
      </div>
    </div>
  );
};

export default MobileHeader;
