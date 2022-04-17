import * as React from 'react';
import Navbar from './components/Navbar/Navbar';
import Content from './components/Content/Content';
import CommunityHeader from './components/CommunityHeader/CommunityHeader';
import Profile from './components/Profile/Profile'

function App() {
  return (
    <div>
     <Navbar/>
     <CommunityHeader/>
     <Profile/>
     <Content/>
     <Content/>
     <Content/>
     <Content/>
    </div>
  );
}

export default App;
