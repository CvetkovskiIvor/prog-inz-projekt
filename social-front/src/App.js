import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './pages/home/index'
import ProfilePage from './pages/profile-page/index'
import CommunityPage from './pages/community-page/index'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/profile-page' element={<ProfilePage />}/>
        <Route path='/community-page' element={<CommunityPage />}/>
      </Routes>
    </Router>
  );
};

export default App;
