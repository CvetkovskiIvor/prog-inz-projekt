import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './pages/home/index'
import ProfilePage from './pages/profile/index'
import CommunityPage from './pages/community/index'
// import SelectedPost from './components/SelectedPost/openedPost'
import OnePost from './pages/onePost/index'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/:id' element={<OnePost />}/>
        <Route  path='/search' element={<Home />}/>
        <Route path='/profile' element={<ProfilePage />}>
          <Route path='/profile/:username' element={<ProfilePage/>}/>
        </Route>
        <Route path='/community' element={<CommunityPage />}/>
      </Routes>
    </Router>
  );
};

export default App;
