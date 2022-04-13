import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

export default function LabTabs() {
  //constants
  const stil_ljudi={
    float: "left"
  };

  const stil_home={
    // dodavat stil za home
  }

  const stil_banner={
    width: "auto", 
    height: "200px",
    border: "solid grey", 
    padding: "50px", 
    background: "#D3D3D3",
   
  };

  const stil_content_profile={
    background: "gray",
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    border: "solid #D3D3D3",
    marginTop: "-100px",
    marginLeft: "20px"
  };

  const stil_content_banner={
    //poigrat se sa ovim
  };

  const Input = styled('input')({
    display: 'none',
  });

  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  //constants

  function add_upload(){  
    return(
      <Stack>
      <label htmlFor="icon-button-file">
        <Input accept="image/*" id="icon-button-file" type="file" />
        <IconButton color="primary" aria-label="upload picture" component="span">
          <PhotoCamera />
        </IconButton>
      </label>
    </Stack>
    );
  }

  function banner_place(){
    return(
      <Box sx={stil_banner}>
          {add_upload()}        
      </Box>
    );
  }

  function ljudi(){
    return (
        <AvatarGroup total={24}>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
            <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
        </AvatarGroup>
    );
  }

  function Home_options(){
    return(
      <label htmlFor="contained-button-file">
          <Input accept="image/*" id="contained-button-file" multiple type="file" />
          <Button variant="contained" component="span">
          Upload
          </Button>
      </label>
    );
  }

  

 // finalni export
  return (
    <>
    <div class = "content_banner" style={stil_content_banner}>{banner_place()}</div><br/><br/>
    <div class = "content_profile" style={stil_content_profile}>{add_upload()}</div>

    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Home" value="1" />
            <Tab label="Members" value="2" />
            <Tab label="About" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1" sx={stil_home}>{Home_options()}<br/>Add More options</TabPanel>
        <TabPanel value="2" sx={stil_ljudi}>{ljudi()}</TabPanel>
        <TabPanel value="3">Add info</TabPanel>
      </TabContext>
    </Box>
    </>
  );


 
}