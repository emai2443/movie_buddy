import React from "react";
import { Link } from "react-router-dom";

export const LandingPage = () => {
  return (
    <div className="signUpStyle">
      <div className="signUpItem"><h2>Welcome To Movie Buddy</h2></div>
      <div className="signUpItem">
        <Link to={"/signin"}>
          <button className='applyButton2'>Log In</button>
        </Link>
        <Link to={"/register"}>
          <button className='applyButton2'>Register</button>
        </Link>
      </div>
    </div>
  );
};
