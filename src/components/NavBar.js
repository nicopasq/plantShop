import React from "react";
import { Link } from "react-router-dom";

function NavBar(){
    return (
        <div>
        <Link to = "/">Home</Link>
        <Link to = "/addPlant">Add New Plant</Link>
        <Link to = "/cart">Cart</Link>
        </div>
    );
}

export default NavBar;