import * as React from 'react';
import { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { Grow } from '@mui/material';
import Navbar from '../../components/Navbar/Navbar';
import {useDispatch} from 'react-redux';
import Posts from '../../components/Posts/Posts';
import {getPosts} from '../../actions/posts'; 

function App() {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch(); 
 
  useEffect(()=>{
    dispatch(getPosts());
  },[currentId,dispatch]);

  return (
    <div>
     <Navbar/>
     <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={3}>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Posts setCurrentId={setCurrentId}/>
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
