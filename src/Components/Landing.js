import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { deepPurple } from "@mui/material/colors";
import { AccountContext } from "./Account";
import { userContext } from "./UserContext";
import { Header } from "./Header";

export const Landing = () => {
  const { getSession, logout } = useContext(AccountContext);
  const [status, setStatus] = useState(false);
  const { value, setValue } = useContext(userContext);

  useEffect(() => {
    getSession().then((session) => {
      // console.log("Session: ", session);
      setStatus(true);
    });
  }, []);

  if (status) {
    setValue(true);
    window.location = "/home";
  }
  return (
    <>
      <Container
        component="main"
        maxWidth="sm"
        sx={{ marginTop: 40 }}
        display="flex"
        alignItems="center"
        justifyContent="center"
        style={{
          backgroundColor: deepPurple[500],
          borderRadius: 5,
          padding: 100,
        }}
      >
        <Box
          sx={{
            margin: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5" style={{ color: "white" }}>
            Welcome to Movie Buddy
          </Typography>

          <Box
            sx={{
              marginTop: 0,
              display: "flex",
              alignItems: "center",
            }}
          >
            <Button
              href="/landing"
              variant="contained"
              sx={{ mt: 2, ml: 2, mr: 2 }}
            >
              <Link to={"/signin"}>Log In</Link>
            </Button>
            <Button variant="contained" sx={{ mt: 2, ml: 2, mr: 2 }}>
              <Link to={"/register"}>Sign Up</Link>
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
};
