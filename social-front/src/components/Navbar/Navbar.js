import * as React from 'react';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Popup from '../Popup/Popup';
import SignUp from '../SignIn/SignUp';
import SignIn from '../SignIn/SignIn';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import './Navbar.css';


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export default function Navbar() {
    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);
    
    const handleChange = (event) => {
      setAuth(event.target.checked);
    };
  
    const handleMenu = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    const [isNotSignedUp, setIsNotSignedUp] = useState(false);
    const [isSignedUp, setIsSignedUp] = useState(false);
    const toggleSignUp = () => {
      setIsNotSignedUp((prevIsNotSignedUp)=> !prevIsNotSignedUp);
    }
    const toggleSignIn = () => {
        setIsSignedUp((prevIsSignedUp)=> !prevIsSignedUp);
      }
    return (
        <div>
          
          <Box sx={{ flexGrow: 1}}>
          <AppBar position="static" sx = {{bgcolor: "#2C2F33"}}>
            <Toolbar>
              <Avatar
              src="https://dbdzm869oupei.cloudfront.net/img/alfombretaratoli/preview/40906.png"
              sx={{ width: 55, height: 55}}
              onClick = {handleClose}
              />
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…" sx={{fontFamily: "-moz-initial", fontSize: 18, padding: (1, 1.2)}}
                  inputProps={{ 'aria-label': 'search' }}
                />
              </Search>
              <Typography variant="h5" component="div" className="multitext" align = "center" sx={{ flexGrow: 1, fontFamily: "Fantasy", marginLeft: 48, position: "-webkit-sticky", fontSize: 28, marginRight: 70}}
              >Game Times
              </Typography>
              <Button color="inherit" sx={{fontSize: 15, fontFamily: "fantasy"}} onClick={toggleSignUp}>Sign up</Button>
              <Button color="inherit" sx={{fontSize: 15, fontFamily: "fantasy"}} onClick={toggleSignIn}>Login</Button>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              {auth && (
            <div>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem sx={{fontSize: 14, fontFamily: "fantasy"}} onClick={handleClose}>Profile</MenuItem>
                <MenuItem sx={{fontSize: 14, fontFamily: "fantasy"}} onClick={handleClose}>My account</MenuItem>
              </Menu>
            </div>
          )}
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
