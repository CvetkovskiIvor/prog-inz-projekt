import React, { useState, useEffect } from 'react';
// import { TextField, Button, Typography, Paper } from '@material-ui/core';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';
// import useStyles from './styles';
import { createPost } from '../../actions/posts';
import IconButton from '@mui/material/IconButton';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import './Forms.css';




const Form = ({ currentId, setCurrentId }) => {
    const [postData, setPostData] = useState({creator:'', title:'', message:'', tags: '', selectedFile:''});
    const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
    const dispatch = useDispatch();

    useEffect(() => {
        if (post) setPostData(post);
      }, [post]);

const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(createPost(postData));

}
const clear = () => {
    setCurrentId(0);
    setPostData({ profilePicture: '', creator: '', title: '', message: '', tags: '', selectedFile: '' });
  };

return (
<Container component="main" align="right">
<div>
    <form  className="popup" autoComplete='off' noValidate  onSubmit={handleSubmit}>
        <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
        <TextField name="message" variant="outlined" label="Message" fullWidth multiline rows={4} value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
        <TextField name="tags" variant="outlined" label="Tags (coma separated)" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })} />
        <div>
            <IconButton aria-label="AddAPhoto" size="medium" /*onClick={() => dispatch(disLikePost(post._id))}*/>
                <AddAPhotoIcon className='dislike' sx={{ "&:hover": { color: "rgb(22, 96, 202)" } }} fontSize="inherit" />
            </IconButton>
            <FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} />
        </div>
        <Button variant="contained" className="submitBtn" size="large" type="submit" fullWidth>Submit</Button>
        <Button variant="contained" className="clearBtn" size="small" onClick={clear} fullWidth>Clear</Button>
    </form>
    
</div>
</Container>
);
};

export default Form;