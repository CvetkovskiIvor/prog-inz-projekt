import * as React from 'react';
import { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { Grow } from '@mui/material';
import Navbar from '../../components/Navbar/Navbar';
import {useDispatch} from 'react-redux';
import Posts from '../../components/Posts/Posts';
import Post from '../../components/SelectedPost/openedPost';
import {getPosts} from '../../actions/posts'; 
import Form from '../../components/Form/Form';
import '../home/homePage.css';

function App() {
//   const [currentId, setCurrentId] = useState(0);
//   const dispatch = useDispatch(); 
 
//   useEffect(()=>{
//     dispatch(getPosts());
//   },[currentId,dispatch]);

  return (
    <div className='pozadina'>
     <Navbar/>
     <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" className="grid" spacing={3}>
            <Grid item xs={12} sm={3}>
            </Grid>
            <Grid item xs={12} sm={6} className="posts">
              <Post/>
            </Grid>
            <Grid item xs={12} sm={3}>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </div>
  );
};

export default App;
