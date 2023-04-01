import React from "react";
import { Link } from "react-router-dom";
import "../styles/navBar.css"
function NavBar(){
    return (
        <div id="navBar">
        <Link to = "/flowers">Flowers</Link>
        <Link to = "/flowers/new">Add New Plant</Link>
        <Link to = "/cart">Cart</Link>
        </div>
    );
}

export default NavBar;