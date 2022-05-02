import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export const OurPicks = () => {

return (
    <>  
    <Container component="main" maxWidth="xs"
            style={{backgroundColor: "white",borderRadius: 5}}>

        <Box sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: 5
        }}>       
            <Typography component="h1" variant="h5" style={{color: "black"}}>
                Sign in
            </Typography>
    {/* onSubmit={handleSubmit} */}
            <Box component="form"  noValidate sx={{ mt: 1 }}>
                <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                style={{backgroundColor: "white"}}
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
                style={{backgroundColor: "white"}}
            />

            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
            >
            Sign In
            </Button>
            </Box>
        </Box>
    </Container>
</>
)
};