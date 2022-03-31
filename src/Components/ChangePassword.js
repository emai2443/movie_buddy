import React, { useState, useContext } from "react";
import { AccountContext } from "./Account";

export default () => {
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const { getSession } = useContext(AccountContext);

  const onSubmit = (event) => {
    event.preventDefault();

    getSession().then(({ user }) => {
      user.changePassword(password, newPassword, (err, result) => {
        if (err) {
          console.error(err);
        } else {
          console.log(result);
          alert(
            "Your password has been changed successfully. Please log out and sign in again"
          );
        }
      });
    });
  };

  return (
    <div className="settingsPassword">
      <form onSubmit={onSubmit}>
        <div className="settingsItem">
          <label>Current password</label><br/>
          <input
            value={password}
            onChange={(event) => setPassword(event.target.value)}/>
        </div>
        <div className="settingsItem">
          <label>New password</label><br/>
          <input
            value={newPassword}
            onChange={(event) => setNewPassword(event.target.value)}/>
        </div>
        <div className="settingsItem">
          <button type="submit">Change password</button>
        </div>
      </form>
    </div>
  );
};
