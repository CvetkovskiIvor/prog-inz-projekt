import * as React from 'react';
import { useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import CommunityHeader from './components/CommunityHeader/CommunityHeader';
import {useDispatch} from 'react-redux';

import {getPosts} from './actions/posts'; 


function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getPosts());
  },[dispatch]);

  return (
    <div>
     <Navbar/>
     <CommunityHeader/>
    </div>
  );
}

export default App;
