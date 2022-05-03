import React, { useState } from "react";
import UserPool from "./Userpool";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { deepPurple } from '@mui/material/colors';

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const logIn = () => {
    navigate("/signin");
  };
  const onSubmit = (event) => {
    event.preventDefault();

    UserPool.signUp(email, password, [], null, (err, data) => {
      if (err) {
        console.error(err);
      }
      console.log(data);
      alert("Please check your e-mail for verification link!");
      logIn();
    });
  };
  return (
    // <div className="signUpStyle">
    //   <div className="signUpItem">
    //     <h2>Not a member yet? Sign up now!</h2>
    //   </div>
    //   <form onSubmit={onSubmit}>
    //     <div className="signUpItem">
    //       <label htmlFor="email">Email</label>
    //       <br />
    //       <input
    //         value={email}
    //         onChange={(event) => setEmail(event.target.value)}
    //         className="signUpInput"
    //       ></input>
    //     </div>
    //     <div className="signUpItem">
    //       <label htmlFor="password"> Password</label>
    //       <br/>
    //       <input
    //         type="password"
    //         value={password}
    //         onChange={(event) => setPassword(event.target.value)}
    //         className="signUpInput"
    //       ></input>
    //     </div>
    //     <div className="signUpItem">
    //       <button type="submit" className="applyButton2">
    //         Sign Up
    //       </button>
    //     </div>

    //     <Link to={"/landing"}>
    //       <Button variant="contained">Back</Button>
    //     </Link>

    //     <Link to={"/signin"}>
    //     <Button variant="outlined">Log In</Button>
    //     </Link>
    //   </form>
    // </div>
    <>
    
    <Container component="main" maxWidth="sm"
        sx={{marginTop:30}}
        display="flex" 
        alignItems="center"
        justifyContent="center"
        style={{backgroundColor: deepPurple[500], borderRadius: 5, padding: 100}}>

        <Box sx={{
          marginTop: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: 1
          }}>       
            <Typography component="h1" variant="h5">
                Sign Up
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
              style={{backgroundColor: "white",borderRadius: 5}}
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
                style={{backgroundColor: "white",borderRadius: 5}}
                onChange={(event) => setPassword(event.target.value)}
                />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}>
                Sign Up
              </Button>
            </Box>
            <Box sx={{
            marginTop: 0,
            display: 'flex',
            alignItems: 'center'
            }}>     
              <Link to={"/landing"}>
                <Button href="/landing"
                    variant="contained"
                    sx={{ mt: 2, ml: 2, mr: 2 }}>
                  Back
                </Button>
              </Link>
              <Link to={"/signin"}>
                <Button
                    variant="contained"
                    sx={{ mt: 2, ml: 2, mr: 2 }}>
                  Log In
                </Button>
              </Link>
            </Box>
        </Box>
    </Container>
    </>
  );
};

export default Signup;
