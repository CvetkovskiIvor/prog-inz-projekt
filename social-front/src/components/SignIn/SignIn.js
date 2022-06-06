import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {signin, signup} from '../../actions/auth';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";



const initialState = {username: '', email: '', password: '' };


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="#">
        GameTimes
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignIn() {
  const history = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState(initialState);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signin(formData, history));
    setFormData({username: '', email: '', password: ''});

  };

  const handleChange = (e) =>{
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              onChange={handleChange}
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              value = {formData.email}
              autoFocus
            />
            <TextField
              margin="normal"
              required
              onChange={handleChange}
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value = {formData.password}
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
        <Copyright sx={{ mt: 8, mb: 2 }} />
      </Container>
    </ThemeProvider>
  );
}