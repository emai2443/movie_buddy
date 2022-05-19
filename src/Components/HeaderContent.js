import React, { useState, useEffect, useContext, MouseEvent } from "react";
import { Link } from "react-router-dom";
import { Account } from "./Account";
import PersonIcon from '@mui/icons-material/Person';
import { AccountContext } from "./Account";
import { userContext } from "./UserContext";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';

export const HeaderContent = () => {
    const { getSession,logout } = useContext(AccountContext);

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
      console.log('logged out')
    };
    return (
      <header>
        <div className="container">
          <div className="inner-content">
            <div className="brand">
              <Link to="/home">Movie Buddy</Link>
            </div>
            <ul className="nav-links">
              <li>
                <Link to="/filter">Filter</Link>
              </li>
              <li>
                <Link to="/ourpick">Our Picks</Link>
              </li>
              {/* <li>
                <Link to="/watchlist">Watchlist</Link>
              </li> */}
              <li>
                <Link to="/favorites">Favorites</Link>
              </li>
              <li>
                <Link to="/random">Random</Link>
              </li>
              <li>
                <Link to="/search">Search</Link>
              </li>
              <li>
                <div className="dropdown">
                  <div className="userIcon">
                      <PersonIcon fontSize="large"/>
                  </div>
                    <div className="dropdown-content">
                        <p className ="settingsCenter"><Link to="/userprofile"><AccountCircleIcon fontSize="small"/>  &nbsp;Profile</Link></p>
                        <p className ="settingsCenter"><Link to="/user"><Settings fontSize="small" />  &nbsp;Settings</Link></p>
                        <p className ="settingsCenter" onClick={biggerFunc}><Logout fontSize="small" />  &nbsp;Logout</p>
                    </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </header>
    );
  };