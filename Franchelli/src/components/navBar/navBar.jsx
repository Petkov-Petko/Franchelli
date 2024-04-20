import React from "react";
import "./navBar.css";
import logo from "../../assets/logo.png";
import search from "../../assets/search.png";
import shoppingCart from "../../assets/shoppingCart.png";

function NavBar() {
  return (
    <div className="navbar">
      <img id="logoImg" src={logo}></img>
      <ul>
        <li>Home</li>
        <li>Menu</li>
        <li>About</li>
        <li>Contact us</li>
      </ul>
      <div className="rightNav">
        <div className="themeChange">
          <a>BG</a>
          <a>EN</a>
        </div>
        <img className="searchImg" src={search}></img>

        <button className="loginBtn">Log in</button>
        <div>
          <img className="shoppingCard" src={shoppingCart}></img>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
