import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import VideogameAssetOffIcon from '@mui/icons-material/VideogameAssetOff';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import ShareIcon from '@mui/icons-material/Share';
import './ContentSS.css';

export default function ContentTemplate() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm" className="qube">
        <Box className='box1' >
            <Typography variant='h6' component = "div" gutterBottom className='profil'>
                <a className='pic' href="https://www.youtube.com/watch?v=_tkY1ZHzHdQ"> 
                  <img src="https://www.google.com" alt="Pic" />
                </a>
                <p className='ime'>
                  Profile name
                </p>
            </Typography>
            <Typography  variant="h4" component = "div" gutterBottom className='naslov'>
               Post title.
            </Typography>
            <Typography  variant="subtitle1" component = "div" gutterBottom className='opis'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                quasi quidem quibusdam.
            </Typography>
            <a className='media' href="https://www.youtube.com/watch?v=_tkY1ZHzHdQ"> 
              <img src="https://www.google.com" alt="Ako postoji slika ili video" />
            </a>
                
            <div className="allIcons">
              <div className='like' >
                <IconButton aria-label="VideogameAsset" size="medium">
                <VideogameAssetIcon fontSize="inherit" />
                </IconButton>
                58
                <IconButton aria-label="VideogameAssetOff" size="medium">
                <VideogameAssetOffIcon fontSize="inherit" />
                </IconButton>
                23
              </div>
              <div className='comShare' align='right'>
              <IconButton aria-label="InsertComment" size="medium">
                <InsertCommentIcon fontSize="inherit"/>
                </IconButton>
                <IconButton aria-label="Share" size="medium">
                <ShareIcon fontSize="inherit"/>
                </IconButton>
              </div>
            </div>
        </Box>
      </Container>
    </React.Fragment>
  );
}