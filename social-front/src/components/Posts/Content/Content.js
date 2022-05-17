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
  const user = JSON.parse(localStorage.getItem('profile'));


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
              <IconButton aria-label="VideogameAsset" disabled={!user?.result} size="medium" onClick={() => dispatch(likePost(post._id))}>
                <VideogameAssetIcon className='like' sx={{ "&:hover": { color: "rgb(26, 238, 26)" } }} fontSize="inherit" />
              </IconButton>
              {post.likes.length}
              <IconButton aria-label="VideogameAssetOff" disabled={!user?.result} size="medium" onClick={() => dispatch(disLikePost(post._id))}>
                <VideogameAssetOffIcon className='dislike' sx={{ "&:hover": { color: "rgb(232, 96, 162)" } }} fontSize="inherit" />
              </IconButton>
              {post.dislikes.length}
            </div>
            <div className='comShare' align='right'>
              <IconButton aria-label="InsertComment" size="medium">
                <InsertCommentIcon className='com' sx={{ "&:hover": { color: "rgb(217, 93, 245)" } }} fontSize="inherit"/>
              </IconButton>
              <IconButton aria-label="Share" size="medium">
                <ShareIcon className='share' sx={{ "&:hover": { color: "rgb(217, 93, 245)" } }} fontSize="inherit"/>
              </IconButton>
            </div>
          </div>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default ContentTemplate;