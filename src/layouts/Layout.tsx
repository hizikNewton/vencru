import { Dispatch, SetStateAction, createContext, useState } from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./components/sidebar";

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
      <div className="flex">
        <SideBar />
        <main className="w-full">
          <Outlet />
        </main>
      </div>
    </MobileNavContext.Provider>
  );
};
export default Layout;
