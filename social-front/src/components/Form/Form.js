import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import  Paper  from '@mui/material/Paper';
import Container from '@mui/material/Container';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';
import { createPost } from '../../actions/posts';




const Form = ({ currentId, setCurrentId }) => {
    const [postData, setPostData] = useState({title:'', message:'', tags: '', selectedFile:''});
    const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('profile'));

    useEffect(() => {
        if (post) setPostData(post);
      }, [post]);

const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPost({...postData, name: user?.result?.name}));
    clear();
    
}
const clear = () => {
    setCurrentId(0);
    setPostData({ profilePicture: '', title: '', message: '', tags: '', selectedFile: '' });
  };

return (
<Container component="main" maxWidth="xs" align="right">
<Paper>
    <form  autoComplete='off' noValidate  onSubmit={handleSubmit}>
        <Typography align="left" variant="h6">Creating a Post</Typography>
        <div><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, profilePicture: base64 })} /></div>
        <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
        <TextField name="message" variant="outlined" label="Message" fullWidth multiline rows={4} value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
        <TextField name="tags" variant="outlined" label="Tags (coma separated)" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })} />
        <div><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div>
        <Button variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
    </form>
    
</Paper>
</Container>
);
};

export default Form;