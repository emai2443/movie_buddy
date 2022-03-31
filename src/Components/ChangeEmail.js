import React, { useState, useContext } from "react";
import { CognitoUserAttribute } from "amazon-cognito-identity-js";
import { AccountContext } from "./Account";

export default () => {
  const [newEmail, setNewEmail] = useState("");
  const [password, setPassword] = useState("");

  const { getSession, authenticate } = useContext(AccountContext);

  const onSubmit = (event) => {
    event.preventDefault();

    getSession().then(({ user, email }) => {
      authenticate(email, password).then(() => {
        const attributes = [
          new CognitoUserAttribute({ Name: "email", Value: newEmail }),
        ];

        user.updateAttributes(attributes, (err, results) => {
          if (err) {
            console.error(err);
          } else {
            console.log(results);
            alert(
              "You Email has been changed successfully, please logout and sign in again"
            );
          }
        });
      });
    });
  };

  return (
    <div className="settingsEmail">
      <form onSubmit={onSubmit}>
        <div className="settingsItem">
          <label>New Email</label><br/>
          <input
            value={newEmail}
            onChange={(event) => setNewEmail(event.target.value)}/>
        </div>
        <div className="settingsItem">
          <label>Current Password</label><br/>
          <input
            value={password}
            onChange={(event) => setPassword(event.target.value)}/>
        </div>
        <div className="settingsItem">
          <button type="submit">Change Email</button>
        </div>
      </form>
    </div>
  );
};
