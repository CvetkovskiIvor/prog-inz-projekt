import * as React from 'react';
import Box from '@mui/material/Box';
import './index.css';
import CoverPhoto from '../../Images/profile-cover.png';
import ProfilePhoto from '../../Images/profile-image.png';
import { Typography } from '@mui/material';
import { Container } from '@mui/material';
import Button from '@mui/material/Button';

export default function Profile() {
  
  return (
      <div className="profile">
        <Box 
        className='profile-container' 
        width={{xs: '100%', sm: '300px'}} 
        marginTop={{xs:0, sm:'5%'}} 
        marginBottom={{xs:0, sm:'10%'}}
        >
          <img className='profile-cover-photo' src={CoverPhoto} alt=''></img>
          <Box className='profile-info-container'>
            <Box className='profile-image-container'>
              <img className='profile-image-photo' src={ProfilePhoto} alt=''></img>
            </Box>
            <Typography className='profile-username'>
              Synix57
            </Typography>
            <Typography className='profile-date'>
              Joined: {new Date().getDate()}.{new Date().getMonth() +1}.{new Date().getFullYear()}
            </Typography>
          </Box>
          <Container className='profile-follow-button-container'>
            <Button className='profile-follow-button' variant="contained">Follow</Button>
          </Container>
          <Box className='profile-about-container'>
            <Typography className='profile-about'>
              About
            </Typography>
            <Typography className='profile-bio'>
              21, from Rijeka, love to code
            </Typography>
          </Box>
        </Box>
      </div>
  );
}