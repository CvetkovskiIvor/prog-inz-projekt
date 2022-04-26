import * as React from 'react';
import { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import { Grow } from '@mui/material';
import Navbar from '../../components/Navbar/Navbar';
import CommunityHeader from '../../components/CommunityHeader/CommunityHeader'
import {useDispatch} from 'react-redux';
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
         IDE GASCINA UEEEE 
        </Container>
      </Grow>
    </div>
  );
};

export default App;
