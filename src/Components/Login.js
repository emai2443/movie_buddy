import React, { useContext, useEffect, useState } from "react";
import { AccountContext } from "./Account";
import { useNavigate } from "react-router-dom";
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
          Log In
        </button>
      </form>
    </div>
  );
};

export default Login;
