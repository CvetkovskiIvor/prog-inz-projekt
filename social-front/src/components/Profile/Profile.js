import * as React from 'react';
import Box from '@mui/material/Box';
import './index.css';
import CoverPhoto from '../../Images/profile-cover.png';
import ProfilePhoto from '../../Images/profile-image.png';
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

export default function Profile() {
  
  return (
    <div className="profile">
      <Box 
        className='profile-container'
        marginBottom={{xs:'3%', sm:'5%'}}
        marginTop={{xs:0, sm:'40%'}}
        width={{xs: '100%', sm: '300px'}}
      >
        <img className='profile-cover-photo' src={CoverPhoto} alt=''></img>
        <Box className='profile-info-container'>
          <Box className='profile-image-container'>
            <img className='profile-image-photo' src={ProfilePhoto} alt=''></img>
          </Box>
          <Typography className='profile-username' fontSize='20px'>
            Synix57
          </Typography>
          <Typography className='profile-date' fontStyle={'Italic'} fontSize='12px'>
            Joined: {new Date().getDate()}.{new Date().getMonth() +1}.{new Date().getFullYear()}
          </Typography>
        </Box>
        <Container className='profile-follow-button-container'>
          <Button className='profile-follow-button' variant="contained" sx={{borderRadius:'20px'}}>Follow</Button>
        </Container>
        <Box className='profile-about-container'>
          <Typography className='profile-about' fontWeight={'bold'}>
            About
          </Typography>
          <Typography className='profile-bio' fontSize='15px'>
            21, from Rijeka, love to code
          </Typography>
        </Box>
      </Box>
    </div>
  );
}