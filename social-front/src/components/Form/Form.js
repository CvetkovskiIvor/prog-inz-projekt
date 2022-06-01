import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';
import { createPost } from '../../actions/posts';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import './Forms.css';




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

  const uploadImage = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    // setBaseImage(base64);
    setPostData({ ...postData, selectedFile: base64 });
  };

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

return (
<Container component="main" align="right">
<div>
    <form  className="popup" autoComplete='off' noValidate  onSubmit={handleSubmit}>
        <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
        <TextField name="message" variant="outlined" label="Message" fullWidth multiline rows={4} value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
        <TextField name="tags" variant="outlined" label="Tags (coma separated)" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })} />
        <input style={{ display: "none" }} id="contained-button-file" type="file" onChange={(e) => { uploadImage(e);}} />
        <label htmlFor="contained-button-file">
        <Button style={{backgroundColor: "#21b6ae"}} variant="contained" className="upload" fullWidth color="primary" component="span" startIcon={<AddAPhotoIcon />}>Upload</Button>
        </label>
        {/* <FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /> */}
        <Button variant="contained" color="secondary" className="submitBtn" size="large" type="submit" fullWidth>Submit</Button>
        <Button variant="contained" color="primary" className="clearBtn" size="small" onClick={clear} fullWidth>Clear</Button>
    </form>
    
</div>
</Container>
);
};

export default Form;