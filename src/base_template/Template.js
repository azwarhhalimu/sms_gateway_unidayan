import { Outlet } from "react-router-dom";
import Menu from "./Menu";
import Nav from "./Nav";
import "../assets/css/nucleo_icons.css";
import "../assets/css/material_dashboard.css";
import "../assets/css/nucleo_svg.css";

const Template = () => {
  return (
    <>
      <div>
        <Menu />
        <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg">
          {/* Navbar */}
          <Nav />
          {/* End Navbar */}
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default Template;
