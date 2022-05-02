import React, { useContext, useEffect, useState } from "react";
import { AccountContext } from "./Account";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { deepPurple } from '@mui/material/colors';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { authenticate } = useContext(AccountContext);
  const navigate = useNavigate();
  const logIn = () => {
    navigate("/user");
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
      });
  };
  return (
    // <div className="signUpStyle">
    //   <div className="signUpItem">
    //     <h2>Sign In</h2>
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
              
    //             <TextField
    //             margin="normal"
    //             required
    //             fullWidth
    //             id="email"
    //             label="Email Address"
    //             name="email"
    //             autoComplete="email"
    //             autoFocus
    //             style={{backgroundColor: "white"}}
    //             onChange={(event) => setEmail(event.target.value)}
    //         />
    //     </div>
    //     <div className="signUpItem">
    //       <label htmlFor="password"> Password</label>
    //       <br />
    //       <input
    //         type="password"
    //         value={password}
    //         onChange={(event) => setPassword(event.target.value)}
    //         className="signUpInput"
    //       ></input>
    //                   <TextField
    //             margin="normal"
    //             required
    //             fullWidth
    //             name="password"
    //             label="Password"
    //             type="password"
    //             id="password"
    //             autoComplete="current-password"
    //             style={{backgroundColor: "white"}}
    //             onChange={(event) => setPassword(event.target.value)}
    //         />
    //     </div>
    //     <div className="signUpItem">
    //       <button type="submit" className="applyButton2">
    //         Log In
    //       </button>
    //     </div>
    //     <Link to={"/landing"}>
    //       <button>
    //         <span class="transition"></span>
    //         <span class="gradient"></span>
    //         <span class="label">Back</span>
    //         Back
    //       </button>
    //     </Link>
    //     <Link to={"/register"}>
    //       <button>
    //         <span class="transition"></span>
    //         <span class="gradient"></span>
    //         <span class="label">Sign Up</span>
    //         Sign Up
    //       </button>
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
                autoComplete="current-password"
                style={{backgroundColor: "white",borderRadius: 5}}
                onChange={(event) => setPassword(event.target.value)}
                />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}>
                Log In
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
              <Link to={"/register"}>
                <Button
                    variant="contained"
                    sx={{ mt: 2, ml: 2, mr: 2 }}>
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
