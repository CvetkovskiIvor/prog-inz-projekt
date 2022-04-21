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
import Avatar from '@mui/material/Avatar';
import './ContentSS.css';

export default function ContentTemplate() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container  className="qube">
        <Box className='box1' >
            <Box className='profilBox'>
                  <Avatar alt="Profile pic" className='profpic'src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmRmFAthtQhLpdQHTuG9twUwh9SpCxWrMvGw&usqp=CAU" />
                   <p className='ime'>
                      Profile name
                    </p>
            </Box>
            <Typography  variant="h5" component = "div" gutterBottom className='naslov'>
               Post title.
            </Typography>
            <Typography  variant="subtitle1" component = "div" gutterBottom className='opis'>
              abc
            </Typography>
            <a className='media' href="https://www.youtube.com/watch?v=_tkY1ZHzHdQ"> 
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmRmFAthtQhLpdQHTuG9twUwh9SpCxWrMvGw&usqp=CAU" className='postSlika'alt="Ako postoji slika ili video" />
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