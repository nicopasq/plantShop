import React from "react";
import "../styles/header.css";
import gardenLogo from "../Images/gardenLogo.png";

function Header(){
return (
    <div id="header">
        <img src={gardenLogo}/>
    </div>
)
}

export default Header;