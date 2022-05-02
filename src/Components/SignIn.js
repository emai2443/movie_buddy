import React, { useState } from "react";
import Login from "./Login";
import { Account } from "./Account";
import Status from "./Status";

const SignIn = () => {
  return (
    <Account>
      <Status />
      <Login />
    </Account>
  );
};
export default SignIn;
