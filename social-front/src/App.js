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
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts/>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    

    </div>
  );
};

export default App;
