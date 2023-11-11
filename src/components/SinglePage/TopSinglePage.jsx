import React from "react";
import MoviesNav from "../movies/MoviesNav";
import logo from "../../images/logo.png";
import { NavLink } from "react-router-dom";
import MiddleSinglePage from "./MiddleSinglePage";

const TopSinglePage = () => {
  return (
    <>
      <header className="header-2">
        <nav>
          <div className="first-1">
            <img src={logo} alt="Logo" />
          </div>
          <div className="second-1">
            <NavLink
              to="/netflix/movies"
              className={({ isActive }) => (isActive ? "notActive" : "active")}
            >
              <h4> MOVIES</h4>
            </NavLink>
          </div>
        </nav>
      </header>
      <MiddleSinglePage />
    </>
  );
};

export default TopSinglePage;
