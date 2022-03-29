import React from "react";
import Settings from "./Settings";
import { Account } from "./Account";
import Status from "./Status";
import Login from "./Login";

export const User = () => {
  return (
    <Account>
      <Settings />
      <Status />
    </Account>
  );
};
