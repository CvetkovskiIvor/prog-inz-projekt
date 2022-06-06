import * as React from 'react';
import { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { Grow } from '@mui/material';
import Navbar from '../../components/Navbar/Navbar';
import Post from '../../components/SelectedPost/openedPost';
import './onePost.css';

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
          <Grid container   alignItems="center" justifyContent="center" direction="column" >
            {/* <Grid item xs={5} sm={3}>
            </Grid> */}
            <Grid item xs={12} sm={6} className="posts">
              <Post/>
            </Grid>
            {/* <Grid item xs={5} sm={3}>
            </Grid> */}
          </Grid>
        </Container>
      </Grow>
    </div>
  );
};

export default App;
