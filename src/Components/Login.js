import React, { useContext, useEffect, useState } from "react";
import { AccountContext } from "./Account";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { authenticate } = useContext(AccountContext);
  //   const HomeButton = () => {
  //     let history = useNavigate();
  //   };
  const navigate = useNavigate();
  const logIn = () => {
    navigate("/user");
    //if
    //else to check authentication
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
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="email">Email</label>
        <input
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        ></input>
        <label htmlFor="password"> Password</label>
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        ></input>
        <button type="submit" onSuceess={logIn}>
          Go home
        </button>
      </form>
    </div>
  );
};

export default Login;
