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
    <div className="settingsStyle" >
      {loggedin && (
        <>
          <h2><i class="fa-solid fa-gear"></i> Settings</h2>
          <h3>Change Password</h3>
          <ChangePassword />
          <h4>Change Email</h4>
          <ChangeEmail />
        </>
      )}
    </div>
  );
};
