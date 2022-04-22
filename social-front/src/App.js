import * as React from 'react';
import { useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { Grow } from '@mui/material';
import Navbar from './components/Navbar/Navbar';
import CommunityHeader from './components/CommunityHeader/CommunityHeader';
import {useDispatch} from 'react-redux';
import Form from './components/Form/Form';
import Posts from './components/Posts/Posts';
import {getPosts} from './actions/posts'; 
import Profile from './components/Profile/Profile';


function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getPosts());
  },[dispatch]);

  return (
    <div>
     <Navbar/>
     {/* <CommunityHeader/> */}
     <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" >
            <Grid item sm={3} order={{sm: 1, xs: 3}}>
              
            </Grid>
            <Grid item xs={12} sm={6} order={{sm: 1, xs: 2}}>
              <Posts/>
            </Grid>
            <Grid item xs={12} sm={3} order={{sm: 1, xs: 1}} sx={{padding: 0}}>
              <Profile/>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    

    </div>
  );
};

export default App;
