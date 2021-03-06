import * as React from 'react';
import { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import { Grow } from '@mui/material';
import Grid from '@mui/material/Grid';
import Navbar from '../../components/Navbar/Navbar';
import {useDispatch, useSelector} from 'react-redux';
import Posts from '../../components/Posts/Posts';
import {getPostsByCreator, getPosts} from '../../actions/posts'; 
import {getProfilesByURL} from '../../actions/profiles'; 
import {useParams} from 'react-router-dom';
import Profile from '../../components/Profile/Profile'
import './index.css'

function App() {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch(); 
  // povlacenje username-a iz URL-a
  const { username } = useParams();
  
  useEffect(()=>{
    dispatch(getProfilesByURL(username));
    dispatch(getPostsByCreator(username));
  },[currentId]);
  
  const profiles = useSelector((state) => state.profiles);
  console.log(profiles);
  
  if(profiles?.username){
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
                <Profile setCurrentId={setCurrentId} />
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </div>
    );
  }else{
    return (
      <>
        <p>
          The file or directory you searched does not exist :(
        </p>
      </>
    );
  }
};

export default App;
