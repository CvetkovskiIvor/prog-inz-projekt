import * as React from 'react';
import { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { Grow } from '@mui/material';
import Navbar from '../../components/Navbar/Navbar';
import {useDispatch} from 'react-redux';
import Posts from '../../components/Posts/Posts';
import {getPosts} from '../../actions/posts'; 
import Form from '../../components/Form/Form';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import IconButton from '@mui/material/IconButton';
import Popup from 'reactjs-popup';
import './homePage.css';

function App() {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch(); 
 
  useEffect(()=>{
    dispatch(getPosts());
  },[currentId,dispatch]);

  return (
    <div className='pozadina'>
     <Navbar/>
     <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" className="grid" spacing={3}>
            <Grid item xs={12} sm={3}>
            </Grid>
            <Grid item xs={12} sm={6} className="posts">
              <Posts setCurrentId={setCurrentId} c/>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Popup
                trigger={<button className="button">
                  <IconButton aria-label="AddCircle" size="large" >
                    <AddCircleIcon className='addPost' sx={{ "&:hover": { color: "rgb(217, 93, 245)" } }} fontSize="inherit" />
                  </IconButton> 
                </button>}
                modal
              >
                {close => (
                <div className="modal">
                  <button className="close" onClick={close}>
                    &times;
                  </button>
                  <div className="header"> ADD YOUR POST </div>
                  <div className="content">
                  <Form/>
                  </div>
                  <div className="actions">
                  </div>
                </div>
                )}
              </Popup>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </div>
  );
};

export default App;
