import React, { useState, useContext, useEffect } from "react";
import { AccountContext } from "./Account";

const Status = () => {
  const [status, setStatus] = useState(false);

  const { getSession, logout } = useContext(AccountContext);

  useEffect(() => {
    getSession().then((session) => {
      console.log("Session: ", session);
      setStatus(true);
    });
  }, []);
  return (
    <div style={{ fontSize: "24px" }} className='settingsCenter'>
      {status ? <button onClick={logout} className='applyButton2'>Logout</button> : <h3>Please Login</h3>}
    </div>
  );
};
export default Status;
