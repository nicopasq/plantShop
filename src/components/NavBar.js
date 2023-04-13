import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/navBar.css";

function NavBar() {
  return (
    <div id="navBar">
      <NavLink to="/">Flowers</NavLink>
      <NavLink to="/flowers/new">Add New Plant</NavLink>
      <NavLink to="/cart">Cart</NavLink>
    </div>
  );
}

export default NavBar;
