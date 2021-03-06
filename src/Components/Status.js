import React, { useState, useContext, useEffect } from "react";
import { AccountContext } from "./Account";
import { userContext } from "./UserContext";

const Status = () => {
  const { value, setValue } = useContext(userContext);
  const [status, setStatus] = useState(false);

  const { getSession, logout } = useContext(AccountContext);

  useEffect(() => {
    getSession().then((session) => {
      // console.log("Session: ", session);
      setStatus(true);
    });
    // console.log(value)
  }, []);

  const biggerFunc = () => {
    logout();
    setValue(false);
  };

  return (
    <AccountContext.Provider value={{ getSession, logout }}>
      <div style={{ fontSize: "16px" }} className="settingsCenter">
        {status ? (
          <div>
            {setValue(true)}
            {/* <button onClick={biggerFunc} className="applyButton2">
              Logout
            </button> */}
          </div>
        ) : (
          // <h3>Please Login</h3>
          void 0
        )}
      </div>
    </AccountContext.Provider>
  );
};
export default Status;
