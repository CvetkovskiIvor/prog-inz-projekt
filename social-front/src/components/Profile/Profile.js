import * as React from 'react';
import Box from '@mui/material/Box';
import './index.css';
import CoverPhoto from '../../Images/profile-cover.png';
import ProfilePhoto from '../../Images/profile-image.png';
import { Typography } from '@mui/material';
import { Container } from '@mui/material';

export default function Profile() {
    
  return (
      <div className="Profile">
        <Box className='profile-container'>
          <img className='profile-cover-photo' src={CoverPhoto} alt=''></img>
          <Box className='profile-image-container'>
            <img className='profile-image-photo' src={ProfilePhoto} alt=''></img>
          </Box>
          <Typography className='profile-username' fontWeight={'bold'} fontSize={20}>
            Synix
          </Typography>
        </Box>
      </div>
  );
}