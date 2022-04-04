import React from "react";
import { Link } from "react-router-dom";

export const LandingPage = () => {
  return (
    <div>
      <div>Welcome To Movie Buddy</div>
      <Link to={"/signin"}>
        <button>Log In</button>
      </Link>
      <Link to={"/register"}>
        <button>Register</button>
      </Link>
    </div>
  );
};
