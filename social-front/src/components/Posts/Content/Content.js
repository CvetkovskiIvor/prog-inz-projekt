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


  
// const Likes = () => {
//   if (post.likes.length > 0) {
//     return post.likes.find((like) => like === (user?.result?._id))
//       ? (
//         <><ThumbUpAltIcon fontSize="small" />&nbsp;{post.likes.length > 2 ? `You and ${post.likes.length - 1} others` : `${post.likes.length} like${post.likes.length > 1 ? 's' : ''}` }</>
//       ) : (
//         <><ThumbUpAltOutlined fontSize="small" />&nbsp;{post.likes.length} {post.likes.length === 1 ? 'Like' : 'Likes'}</>
//       );
//   }

//   return <><ThumbUpAltOutlined fontSize="small" />&nbsp;Like</>;
// };

// const disLikes = () => {
//   if (post.dislikes.length > 0) {
//     return post.dislikes.find((dislike) => dislike === (user?.result?._id))
//       ? (
//         <><ThumbUpAltIcon fontSize="small" />&nbsp;{post.dislikes.length > 2 ? `You and ${post.dislikes.length - 1} others` : `${post.dislikes.length} like${post.dislikes.length > 1 ? 's' : ''}` }</>
//       ) : (
//         <><ThumbUpAltOutlined fontSize="small" />&nbsp;{post.dislikes.length} {post.dislikes.length === 1 ? 'Dislike' : 'Dislikes'}</>
//       );
//   }

//   return <><ThumbUpAltOutlined fontSize="small" />&nbsp;Dislike</>;
// };

  return (
    <React.Fragment>
      <Container className="qube">
        <Box className='box1'>
          <Box className='profilBox'>
            <Avatar alt="Profile pic" className='profpic'src={post.profilePicture} />
            <p className='ime'>
              {post.name} 
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