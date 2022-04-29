import * as React from 'react';
import { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { Grow } from '@mui/material';
import Navbar from '../../components/Navbar/Navbar';
import CommunityHeader from '../../components/CommunityPage/CommunityHeader';
import {useDispatch} from 'react-redux';
import Form from '../../components/Form/Form';
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
         IDE GASCINA NA MAKSCINA!=!==!=! 
        </Container>
      </Grow>
    </div>
  );
};

export default App;
