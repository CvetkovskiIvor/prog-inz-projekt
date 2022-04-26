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
import {likePost, disLikePost} from '../../../actions/posts';
import Avatar from '@mui/material/Avatar';
import './ContentSS.css';

const ContentTemplate = ({post, setCurrentId}) => {
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      <Container className="qube">
        <Box className='box1'>
          <Box className='profilBox'>
            <Avatar alt="Profile pic" className='profpic'src={post.profilePicture} />
            <p className='ime'>
              {post.creator} 
            </p>
          </Box>
          <Typography  variant="h5" component = "div" gutterBottom className='naslov'>
            {post.title}
          </Typography>
          <hr className='line'></hr>
          <Typography  variant="subtitle1" component = "div" gutterBottom className='opis'>
            {post.message}
          </Typography>
          <div className='media'>
            <img src={post.selectedFile} className='slika' alt="Ako postoji slika ili video" />
          </div>
          <div className="allIcons">
            <div className='likedislike' >
              <IconButton aria-label="VideogameAsset" size="medium" onClick={() => dispatch(likePost(post._id))}>
                <VideogameAssetIcon className='like' fontSize="inherit" />
              </IconButton>
              {post.likeCount}
              <IconButton aria-label="VideogameAssetOff" size="medium" onClick={() => dispatch(disLikePost(post._id))}>
                <VideogameAssetOffIcon className='dislike' fontSize="inherit" />
              </IconButton>
              {post.disLikeCount}
            </div>
            <div className='comShare' align='right'>
              <IconButton aria-label="InsertComment" size="medium">
                <InsertCommentIcon className='com' fontSize="inherit"/>
              </IconButton>
              <IconButton aria-label="Share" size="medium">
                <ShareIcon className='share' fontSize="inherit"/>
              </IconButton>
            </div>
          </div>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default ContentTemplate;