import React from "react";
import { Link, Outlet } from "react-router-dom";
import TeslanameLogo from "../assets/images/tesla-wide.png";
import "../assets/style.css";

function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light px-5">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <Link className="navbar-brand" to="/">
          <img
            src={TeslanameLogo}
            width="140"
            height="30"
            className="d-inline-block align-top ml-5"
            alt=""
          />
        </Link>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0"></ul>
          <form className="form-inline my-2 my-lg-0">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item ">
                <Link className="nav-link" to="/">
                  Home <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products">
                  Products
                </Link>
              </li>
            </ul>
          </form>
        </div>
      </nav>

      <Outlet />
    </div>
  );
}

export default Header;
