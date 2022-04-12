import * as React from 'react';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Popup from './Popup';
import SignUp from './SignUp';
import SignIn from './SignIn';

export default function Navbar() {
    const [isNotSignedUp, setIsNotSignedUp] = useState(false);
    const [isSignedUp, setIsSignedUp] = useState(false);
    const toggleSignUp = () => {
      setIsNotSignedUp((prevIsNotSignedUp)=> !prevIsNotSignedUp);
    }
    const toggleSignIn = () => {
        setIsSignedUp((prevIsSignedUp)=> !prevIsSignedUp);
      }
    return (
        <div className="App">
          <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Reddit 2.0
              </Typography>
              <Button color="inherit" onClick={toggleSignUp}>Sign up</Button>
              <Button color="inherit" onClick={toggleSignIn}>Login</Button>
               
            </Toolbar>
          </AppBar>
        </Box>
        {isNotSignedUp && <Popup
          content={<>
        <SignUp/>
          </>}
          handleClose={toggleSignUp}
        />}
        
        {isSignedUp && <Popup
          content={<>
        <SignIn/>
          </>}
          handleClose={toggleSignIn}
        />}
        </div>
      );
}