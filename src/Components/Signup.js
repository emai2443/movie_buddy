import React, { useState } from "react";
import UserPool from "./Userpool";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const logIn = () => {
    navigate("/signin");
  };
  const onSubmit = (event) => {
    event.preventDefault();

    UserPool.signUp(email, password, [], null, (err, data) => {
      if (err) {
        console.error(err);
      }
      console.log(data);
      alert("Please check your e-mail for verification link!");
      logIn();
    });
  };
  return (
    <div className="signUpStyle">
      <div className="signUpItem">
        <h2>Not a member yet? Sign up now!</h2>
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
          <button type="submit" className="applyButton2">
            Sign Up
          </button>
        </div>

            <Link to={"/landing"}>
              <button className="landingButtons">
                <span class="transition"></span>
                <span class="gradient"></span>
                <span class="label">Back</span>
              </button>
            </Link>

            <Link to={"/signin"}>
            <button className="landingButtons">
                <span class="transition"></span>
                <span class="gradient"></span>
                <span class="label">Log In</span>
              </button>
            </Link>

      </form>
    </div>
  );
};

export default Signup;
