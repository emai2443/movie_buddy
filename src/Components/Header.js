import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

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
                    <p>Profile</p>
                  </Link>
                  <Link to="/user">
                    <p>Settings</p>
                  </Link>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
