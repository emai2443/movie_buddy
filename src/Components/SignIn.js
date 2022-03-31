import React, { useState } from "react";
import Login from "./Login";
import { Account } from "./Account";
import Status from "./Status";

const SignIn = () => {
  return (
    <div className="signUpStyle">
    <Account>
      <Status />
      <Login />
    </Account>
    </div>
  );
};
export default SignIn;
