import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Account } from "./Account";
import Status from "./Status";

export const Header = () => {
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
            <li>
              <Link to="/watchlist">Watchlist</Link>
            </li>
            <li>
              <Link to="/watched">Watched</Link>
            </li>
            <li>
              <Link to="/random">Random</Link>
            </li>
            <li>
              <Link to="/search">Search</Link>
            </li>
            <li>
              <div className="dropdown">
                <i className="fa-solid fa-user btn"></i>
                <div className="dropdown-content">
                  <Link to="/userprofile">
                    <p className ="settingsCenter">Profile</p>
                  </Link>
                  <Link to="/user">
                    <p className ="settingsCenter">Settings</p>
                  </Link>
                  <p>
                    <Account>
                      <Status />
                    </Account>
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
