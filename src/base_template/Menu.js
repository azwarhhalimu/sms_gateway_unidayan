import React, { useCallback, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Aktif_class_menu } from "../Widget";
import "./style.css";
const Menu = () => {
  const location = useLocation();
  const [menu, setMenu] = useState();
  setInterval(() => {
    const getMenu = window.sessionStorage.getItem("akmalo_menu");
    setMenu(getMenu);
  });
  React.useEffect(() => {}, []);

  return (
    <>
      <aside className="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3 bg-gradient-dark" id="sidenav-main">
        <div className="sidenav-header">
          <i className="fas fa-times p-3 cursor-pointer text-white opacity-5 position-absolute end-0 top-0 d-none d-xl-none" aria-hidden="true" id="iconSidenav" />
          <Link className="navbar-brand m-0" to={"/"}>
            <img src="/template/assets/img/logo-ct.png" className="navbar-brand-img h-100" alt="main_logo" />
            <span className="ms-1 font-weight-bold text-white">Administrator</span>
          </Link>
        </div>
        <hr className="horizontal light mt-0 mb-2" />
        <div className="collapse navbar-collapse w-auto" id="sidenav-collapse-main">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link id={menu === "beranda" ? "aktif" : "aktifx"} className={"nav-link text-white"} to="/">
                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="material-icons opacity-10">dashboard</i>
                </div>
                <span className="nav-link-text ms-1">Dashboard</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link id={menu === "kontak" ? "aktif" : "aktifx"} className="nav-link text-white" to="/kontak.html">
                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="material-icons opacity-10">table_view</i>
                </div>
                <span className="nav-link-text ms-1">Kontak</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link id={menu === "riwayat" ? "aktif" : "aktifx"} className="nav-link text-white" to="/riwayat-pesan.html">
                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="material-icons opacity-10">receipt_long</i>
                </div>
                <span className="nav-link-text ms-1">Riwayat Pesan</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link id={menu === "pesan" ? "aktif" : "aktifx"} className="nav-link text-white" to="/pesan.html">
                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="material-icons opacity-10">view_in_ar</i>
                </div>
                <span className="nav-link-text ms-1">Pesan</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link id={menu === "kategori_kontak" ? "aktif" : "aktifx"} className="nav-link text-white" to="/kategori-kontak.html">
                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="material-icons opacity-10">format_textdirection_r_to_l</i>
                </div>
                <span className="nav-link-text ms-1">Kategori Kontak</span>
              </Link>
            </li>

            <li className="nav-item mt-3">
              <h6 className="ps-4 ms-2 text-uppercase text-xs text-white font-weight-bolder opacity-8">Halaman Akun</h6>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/profil.html">
                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="material-icons opacity-10">person</i>
                </div>
                <span className="nav-link-text ms-1">Profil</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="sidenav-footer position-absolute w-100 bottom-0">
          <div className="mx-3">
            <button onClick={() => {}} className="btn bg-gradient-primary mt-4 w-100" href="https://www.creative-tim.com/product/material-dashboard-pro?ref=sidebarfree" type="button">
              Logout (Admin)
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Menu;
