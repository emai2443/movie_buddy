import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { deepPurple } from '@mui/material/colors';
import { AccountContext } from "./Account";
import { Landing } from "./Landing";
import { Account } from "./Account";



export const LandingPage = () => {


  return (
      // <div className="signUpStyle">
      //   <div className="signUpItem"><h2>Welcome To Movie Buddy</h2></div>
      //   <div className="signUpItem">
      //     <Link to={"/signin"}>
      //       <button className='applyButton2'>Log In</button>
      //     </Link>
      //     <Link to={"/register"}>
      //       <button className='applyButton2'>Register</button>
      //     </Link>
      //   </div>
      // </div>

  <>
  <Account>
      <Landing/>
  </Account>
  </>
  );
};
