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
import { useDispatch } from 'react-redux';
import {likePost} from '../../../actions/posts';
import './ContentSS.css';

const ContentTemplate = ({post, setCurrentId}) => {
  const dispatch = useDispatch();


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
                  {post.creator}
                </p>
            </Typography>
            <Typography  variant="h4" component = "div" gutterBottom className='naslov'>
               {post.title}
            </Typography>
            <Typography  variant="subtitle1" component = "div" gutterBottom className='opis'>
                {post.message}
            </Typography>
            <a className='media' href="https://www.youtube.com/watch?v=_tkY1ZHzHdQ"> 
              <img src="https://www.google.com" alt="Ako postoji slika ili video" />
            </a>
                
            <div className="allIcons">
              <div className='like' >
                <IconButton aria-label="VideogameAsset" size="medium" onClick={() => dispatch(likePost(post._id))}>
                <VideogameAssetIcon fontSize="inherit" />
                </IconButton>
                {post.likeCount}
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
};

export default ContentTemplate;