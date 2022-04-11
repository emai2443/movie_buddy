import React, { useState, useEffect } from "react";
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
                <Link to="/user" className="btn">
                  User
                </Link>
                <div className="dropdown-content">
                  {/* <Link to="/signin"> */}
                    <p>Sign In</p>
                  {/* </Link>
                  <Link to="/register"> */}
                    <p>Register</p>
                  {/* </Link> */}
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
