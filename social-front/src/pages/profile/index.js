import * as React from 'react';
import { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import { Grow } from '@mui/material';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Navbar from '../../components/Navbar/Navbar';
import {useDispatch, useSelector} from 'react-redux';
import Posts from '../../components/Posts/Posts';
import {getPosts} from '../../actions/posts'; 
import {getProfilesByURL} from '../../actions/profiles'; 
import Profile from '../../components/Profile/Profile'
import './index.css'

function App(props) {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch(); 
 
  useEffect(()=>{
    dispatch(getPosts());
  },[currentId,dispatch]);

  // povlacenje username-a iz URL-a
  let path = window.location.pathname;
  let directories = path.split("/");
  let lastDirectory = directories[(directories.length - 1)];

  // provjera postojanja trazenog profila
  dispatch(getProfilesByURL(lastDirectory));

  /*const profiles = useSelector((state) => state.profiles);
  console.log(profiles);*/
  
  if(0){
    return (
      <>
        <p>
          The file or directory you searched does not exist :(
        </p>
      </>
    );
  }else{
    return (
      <div>
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
                <Profile setCurrentId={setCurrentId}/>
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </div>
    );
  }
};

export default App;