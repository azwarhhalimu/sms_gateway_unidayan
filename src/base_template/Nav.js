import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Nav = () => {
  const parem = useLocation();

  const datax = JSON.parse(sessionStorage.getItem("breadcumb", true));

  return (
    <>
      <nav
        style={{
          marginTop: "15px",
          background: "#0096FF",
          color: "white !important",
        }}
        className="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl"
        id="navbarBlur"
        data-scroll="true"
      >
        <div
          style={{
            color: "white !important",
          }}
          className="container-fluid py-1 px-3"
        >
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
              {/* {datax.label.map((list, index) => (
                <li className="breadcrumb-item text-sm">
                  <Link className=" text-white" to={datax.link[index]}>
                    {list}
                  </Link>
                </li>
              ))} */}
            </ol>
            <h6 className="font-weight-bolder text-white mb-0">Aplikasi SMS Gate Way</h6>
          </nav>
          <div className="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4" id="navbar">
            <div className="ms-md-auto pe-md-3 d-flex align-items-center">
              <div className="input-group input-group-outline">
                <label className="form-label text-white"></label>
                <input placeholder="Ketikkan Pencarian anda" type="text" className="form-control text-white" />
              </div>
            </div>
            <ul className="navbar-nav justify-content-end">
              <li className="nav-item d-flex align-items-center">
                <a href="../pages/sign-in.html" className="nav-link text-white text-body font-weight-bold px-0">
                  <i className="fa text-white fa-user me-sm-1" />
                  <span className="d-sm-inline text-white d-none">Sign In</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
