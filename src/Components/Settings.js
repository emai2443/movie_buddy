import React, { useEffect, useContext, useState } from "react";
import { AccountContext } from "./Account";
import ChangePassword from "./ChangePassword";
import ChangeEmail from "./ChangeEmail";
export default () => {
  const { getSession } = useContext(AccountContext);

  const [loggedin, setLoggedIn] = useState(false);

  useEffect(() => {
    getSession().then(() => {
      setLoggedIn(true);
    });
  }, []);

  return (
    <div>
      {loggedin && (
        <>
          <h2>Settings</h2>
          <h3>Change Password</h3>
          <ChangePassword />
          <h4>Change Email</h4>
          <ChangeEmail />
        </>
      )}
    </div>
  );
};
