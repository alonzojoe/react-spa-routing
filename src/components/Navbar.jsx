import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";
const Navbar = () => {
  return (
    <header>
      <ul className={classes.links}>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
            to="/"
            end
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
            to="/about"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
            to="/contact"
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
