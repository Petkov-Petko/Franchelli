import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <div className="footer">
      <img id="logoImgFooter" src={logo} alt="Logo"></img>
      <div className="about">
      <h3>About</h3>
        <p>
          Welcome to our website! We are dedicated to providing you with the
          best experience possible. Browse through our wide selection of items
          and explore all we have to offer.
        </p>
      </div>
      <div className="Profile">
        <h3>Profile</h3>
        <p>Register</p>
        <p>Login</p>
        <p>Payment methods</p>
      </div>
      <div className="Contacts">
        <h3>Contacts</h3>
        <p>Address: 1234 Main Street</p>
        <p>For orders:123-456-789</p>
        <p>Email: PetkoZlatilov1234@gmail.com</p>
      </div>
    </div>
  );
};

export default Footer;
