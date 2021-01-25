import React from "react";
import { NavLink } from "react-router-dom";

function NavMain() {
  return (
    <div>
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink exact to="/temperature">
        Temperature
      </NavLink>
      <NavLink exact to="/customize-image">
        Customize-image
      </NavLink>
    </div>
  );
}

export default NavMain;
