import React, { useContext, useEffect, useState } from "react";
import { AccountContext } from "./Account";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { deepPurple } from "@mui/material/colors";
import DeleteIcon from '@mui/icons-material/Delete';

import Modal from '@mui/material/Modal';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { authenticate } = useContext(AccountContext);
  const navigate = useNavigate();
  const logIn = () => {
    navigate("/home");
  };
  const onSubmit = (event) => {
    event.preventDefault();

    authenticate(email, password)
      .then((data) => {
        console.log("Logged in!", data);
      })
      .then(logIn)
      .catch((err) => {
        console.error("Failed to login", err);
        handleOpen()
      });
  };

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    backgroundColor: 'white',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
    <Modal
    open={open}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <Box sx={style}><DeleteIcon />
      <Typography id="modal-modal-title" variant="h6" component="h2"sx={{ mt: 2 , color: "black"}}>
        Text in a modal
      </Typography>
      <Typography id="modal-modal-description" sx={{ mt: 2 , color: "black"}}>
        Wrng pass my guy
      </Typography>
    </Box>
  </Modal>
      <Container
        component="main"
        maxWidth="sm"
        sx={{ marginTop: 30 }}
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
            marginTop: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: 1,
          }}
        >
          <Typography component="h1" variant="h5">
            Log In
          </Typography>

          <Box component="form" onSubmit={onSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus 
              variant="filled"
              style={{ backgroundColor: "white", borderRadius: 5 }}
              onChange={(event) => setEmail(event.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              variant="filled"
              autoComplete="current-password"
              style={{ backgroundColor: "white", borderRadius: 5 }}
              onChange={(event) => setPassword(event.target.value)}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Log In
            </Button>
          </Box>
          <Box
            sx={{
              marginTop: 0,
              display: "flex",
              alignItems: "center",
            }}
          >
            <Link to={"/landing"}>
              <Button
                href="/landing"
                variant="contained"
                sx={{ mt: 2, ml: 2, mr: 2 }}
              >
                Back
              </Button>
            </Link>
            <Link to={"/register"}>
              <Button variant="contained" sx={{ mt: 2, ml: 2, mr: 2 }}>
                Sign Up
              </Button>
            </Link>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Login;
