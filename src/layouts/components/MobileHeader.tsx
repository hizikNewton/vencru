import { FC } from "react";
import Logo from "@assets/images/Logo.png";

const MobileHeader: FC = () => {
  return (
    <div className="sidebar-logo">
      <div className="">
        <img src={Logo} />
      </div>
    </div>
  );
};

export default MobileHeader;
