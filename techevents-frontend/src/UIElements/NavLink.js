import React from "react";
import { NavLink } from "react-router-dom";

import "./NavLink.css";

const NavLinks = (props) => {
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/" exact>
          ALL EVENTS
        </NavLink>
      </li>
      <li>
        <NavLink to="/places/new">ADD EVENT</NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
