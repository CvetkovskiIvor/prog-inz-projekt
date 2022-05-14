import * as React from 'react';
import { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import { Grow } from '@mui/material';
import Box from '@mui/material/Box';
import Navbar from '../../components/Navbar/Navbar';
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
        <Box bgcolor={'#1E2124'}>
          IDE GASCINA NA MAKSCINA!=!==!=! 
        </Box>
      </Grow>
    </div>
  );
};

export default App;
