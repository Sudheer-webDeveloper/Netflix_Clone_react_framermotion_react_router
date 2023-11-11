import React from "react";
import logo from "../../images/logo.png";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

const NavList = () => {
  return (
    <header>
      <nav>
        <div className="first-1">
          <img src={logo} alt="" />
        </div>
        <div className="second-1">
          <NavLink
            to=".."
            className={({ isActive }) => (isActive ? "notActive" : "active")}
          >
            <h4>HOME</h4>
          </NavLink>
          <NavLink
            to="/netflix/movies"
            className={({ isActive }) => (isActive ? "notActive" : "active")}
          >
            <h4>MOVIES</h4>
          </NavLink>

          <motion.h1
            initial={{
              x: -10,
              opacity: 0.3,
            }}
            animate={{
              x: 10,
              opacity: 1,
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}

          >
            <FiArrowRight />
          </motion.h1>
        </div>
      </nav>
    </header>
  );
};

export default NavList;

/*

 

*/
