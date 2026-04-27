import { Outlet } from "react-router-dom";
import Header from "../Header";
import SideBar from "../SideBar";
import { useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import Footer from "../Footer";

export default function LayoutWrapper() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const { temaEscuro, setTemaEscuro } = useTheme();

  const onToggleMenu = () => setIsSideBarOpen(!isSideBarOpen);
  return (
    <div className="layout-wrapper">
      <SideBar isOpen={isSideBarOpen} />
      <div className="wrapper">
        <Header
          temaEscuro={temaEscuro}
          setTemaEscuro={setTemaEscuro}
          onToggleMenu={onToggleMenu}
        />
        <main>
          <Outlet />
        </main>
        <Footer/>
      </div>
    </div>
  );
}
