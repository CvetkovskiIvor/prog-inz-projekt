import * as React from 'react';
import Navbar from './components/Navbar/Navbar';
import CommunityHeader from './components/CommunityHeader/CommunityHeader';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <div>
     <Navbar/>
     <CommunityHeader/>
     <Profile/>
    </div>
  );
}

export default App;
