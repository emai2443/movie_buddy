import React, { useState, useEffect, useContext, MouseEvent } from "react";
import { Link } from "react-router-dom";
import { Account } from "./Account";
import Status from "./Status";
import PersonIcon from '@mui/icons-material/Person';
import { AccountContext } from "./Account";
import { userContext } from "./UserContext";
import { HeaderContent } from "./HeaderContent";

export const Header = () => {

  return (
    <Account>
      <HeaderContent/>
      <Status/>
    </Account>
  );
};
