import React, {useState} from "react";
import "./navBar.css";
import logo from "../../assets/logo.png";
import search from "../../assets/search.png";
import shoppingCart from "../../assets/shoppingCart.png";
import { Link } from "react-router-dom";


function NavBar({setIsLogIn}) {

  
  const [menu, setMenu] = useState("menu");

  return (
    <div className="navbar">
      <img id="logoImg" src={logo}></img>
      <ul>
        <Link to="/Franchelli/" onClick={() => setMenu("home")} className={menu==="home"?"active": ""}>Home</Link>
        <Link to="/Franchelli/#explore-menu" onClick={() => setMenu("menu")} className={menu==="menu"?"active": ""}>Menu</Link>
        <Link to="/Franchelli/about" onClick={() => setMenu("about")} className={menu==="about"?"active": ""}>About</Link>
        <Link to="/Franchelli/contacts" onClick={() => setMenu("contacts")} className={menu==="contacts"?"active": ""}>Contact us</Link>
      </ul>
      <div className="rightNav">
        <div className="themeChange">
          <a>BG</a>
          <a>EN</a>
        </div>
        <img className="searchImg" src={search}></img>

        <button onClick={() => setIsLogIn(true)} className="loginBtn">Log in</button>
        <div>
          <Link to="/Franchelli/card"><img className="shoppingCard" src={shoppingCart}></img></Link>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
