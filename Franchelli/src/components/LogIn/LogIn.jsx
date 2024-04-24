import React from "react";
import "./LogIn.css";
import { useState } from "react";

function SignUp({ setIsLogIn }) {
  const [register, setRegister] = useState(false);

  return (
    <div className="body">
      <div className="container">
        <form className="loginForm">
          <div className="head">
            <span>{register ? "Sign up" : "Log in"}</span>
            <p>Create a free account with your email.</p>
          </div>
          <div className="inputs">
            {register ? (
              <input type="text" placeholder="Full Name" required />
            ) : null}

            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
          </div>
          <button>{register ? "Sign up" : "Log in"}</button>
        </form>
        <div className="form-footer">
          <p>
            {register ? "Already have an account? " : "Don't have an account? "}
            <a onClick={() => setRegister(!register)} href="#">
              {register? "Log in": "Sign up"}
            </a>
            <span onClick={() => setIsLogIn(false)} id="close">
              Close
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;