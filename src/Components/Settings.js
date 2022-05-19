import React, { useEffect, useContext, useState } from "react";
import { AccountContext } from "./Account";
import { userContext } from "./UserContext";
import ChangePassword from "./ChangePassword";
import ChangeEmail from "./ChangeEmail";

export default () => {
  const { getSession, logout } = useContext(AccountContext);

  const [loggedin, setLoggedIn] = useState(false);
  const { value, setValue } = useContext(userContext);

  useEffect(() => {
    getSession().then(() => {
      setLoggedIn(true);
    });
  }, []);

  const biggerFunc = () => {
    logout();
    setValue(false);
    // console.log('logged out')
  };

  return (
    <div className="settingsStyle">
      {loggedin && (
        <>
          <h2>
            <i class="fa-solid fa-gear"></i> Settings
          </h2>
          <h3>Change Password</h3>
          <ChangePassword />
          <h4>Change Email</h4>
          <ChangeEmail />
          <button onClick={biggerFunc} className="applyButton2">
            Logout
          </button>
        </>
      )}
    </div>
  );
};
