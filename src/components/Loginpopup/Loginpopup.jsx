import React, { useState } from "react";
import { assets } from "../../assets/assets";
import './Loginpopup.css';

const Loginpopup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Sign Up");
  return (
    <div class="login-popup">
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt="close-icon"
          />
        </div>

        <div className="login-popup-inputs">
          {currState === "Login" ? (
            <></>
          ) : (
            <input type="text" placeholder="Your name" required />
          )}
          <input type="email" placeholder="Your email" required />
          <input type="password" placeholder="Password" required />
        </div>
        <button>{currState === "Sign Up" ? "Create account" : "Login"}</button>

        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
        {currState === "Sign Up" ?   <p>Create a new account? <span onClick={() => setCurrState('Login')}>Click here</span></p>: <p>Already have an account? <span onClick={() => setCurrState('Sign Up')}>Login here</span></p>}        
      </form>
    </div>
  );
};

export default Loginpopup;
