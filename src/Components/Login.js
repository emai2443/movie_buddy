import React, { useContext, useEffect, useState } from "react";
import { AccountContext } from "./Account";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { authenticate } = useContext(AccountContext);
  const navigate = useNavigate();
  const logIn = () => {
    navigate("/user");
  };
  const onSubmit = (event) => {
    event.preventDefault();

    authenticate(email, password)
      .then((data) => {
        console.log("Logged in!", data);
      })
      .then(logIn)
      .catch((err) => {
        console.error("Failed to login", err);
      });
  };
  return (
    <div className="signUpStyle">
      <div className="signUpItem">
        <h2>Sign In</h2>
      </div>
      <form onSubmit={onSubmit}>
        <div className="signUpItem">
          <label htmlFor="email">Email</label>
          <br />
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="signUpInput"
          ></input>
        </div>
        <div className="signUpItem">
          <label htmlFor="password"> Password</label>
          <br />
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="signUpInput"
          ></input>
        </div>
        <div className="signUpItem">
          <button type="submit" onSuceess={logIn} className="applyButton2">
            Log In
          </button>
        </div>
        <Link to={"/landing"}>
          <button>
            {/* <span class="transition"></span>
            <span class="gradient"></span>
            <span class="label">Back</span> */}
            Back
          </button>
        </Link>
        <Link to={"/register"}>
          <button>
            {/* <span class="transition"></span>
            <span class="gradient"></span>
            <span class="label">Sign Up</span> */}
            Sign Up
          </button>
        </Link>
      </form>
    </div>
  );
};

export default Login;
