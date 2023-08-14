import { Dispatch, SetStateAction, createContext, useState } from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./components/sidebar";
import MobileHeader from "./components/MobileHeader";
import "./styles.css";

interface MobileNavContextType {
  open: boolean;
  toggle: Dispatch<SetStateAction<boolean>>;
}

export const MobileNavContext = createContext<MobileNavContextType>({
  open: false,
  toggle: () => {},
});

const Layout = () => {
  const [open, toggle] = useState(false);
  return (
    <MobileNavContext.Provider value={{ open, toggle }}>
      <MobileHeader />
      <div className="flex relative">
        <SideBar />
        <main className="w-full ml-72 ">
          <div className="flex flex-col p-10 gap-y-8 bg-gray-50 main-container">
            <Outlet />
          </div>
        </main>
      </div>
    </MobileNavContext.Provider>
  );
};
export default Layout;
