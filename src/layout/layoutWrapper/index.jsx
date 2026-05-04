import Header from "../Header";
import SideBar from "../SideBar";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import Footer from '../../layout/Footer/';

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
      </div>
      <Footer/>
    </div>
  );
}
