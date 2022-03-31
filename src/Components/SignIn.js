import React, { useState } from "react";
import Login from "./Login";
import { Account } from "./Account";
import Status from "./Status";

const SignIn = () => {
  return (
    <div style={{
      position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)'
    }}>
    <Account>
      <Status />
      <Login />
    </Account>
    </div>
  );
};
export default SignIn;
