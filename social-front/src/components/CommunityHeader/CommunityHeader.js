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
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { borderRadius, height, textAlign } from '@mui/system'; // ne koristim ali mozda ce mi trebat
import { styled } from '@mui/material/styles';
import Content from '../Posts/Content/Content';
import Profile from '../Profile/Profile';


export default function LabTabs() {
  //constants
  const stil_ljudi={
    float: "right"
  };
  const stil_member_info={
    width: "70%",
    float: "left"
  };

  const stil_home={
    // dodavat stil za home
    textAlign:"center",
  }

  const stil_info={
    textAlign:"center",
  }

  const stil_ime={
    marginLeft: "200px",
    marginTop: "-70px",
    float: "left",
    color: "gray",
    textDecoration: "underline"
  }

  const stil_podnaslov={
    marginLeft: "200px",
    marginTop: "-50px",
    float: "left",
    color: "#D3D3D3"
  }

  const stil_banner={
    width: "auto", 
    height: "200px",
    border: "solid grey", 
    padding: "50px", 
    background: "#D3D3D3",
    textAlign:"center",
   
  };

  const stil_content_profile={
    background: "gray",
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    border: "solid #D3D3D3",
    marginTop: "-100px",
    marginLeft: "20px",
    textAlign:"center",
  };

  const stil_content_banner={
    //trenutno nepotrebno
  };

  const Input = styled('input')({
    display: 'none',
  });

  const [expanded, setExpanded] = React.useState(false);

  const handleChangeMemeber = (panel) => (event, isExpanded) => {setExpanded(isExpanded ? panel : false); };

  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  //constants

  function members_information(){
    return(
      <div class="ModeratorAndUsers" style={stil_member_info}>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChangeMemeber('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
          Moderators
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>...and mails...</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Quiccky300(quicc@gmail.com), Altimus69(succc@gmail.com), _blackSack_(giginigi@hotmail.com), Minecraft_boy123(dirtblocc@gmail.com)
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChangeMemeber('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>Top Users</Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            Our most beloved users 
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          BananaSplit1991, Make14Ra1n, Gun444MM,.....
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChangeMemeber('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            User rules
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            Filtering has been entirely disabled for whole web server
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Add more rules.....
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChangeMemeber('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>Patreons</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Add those who contribute with more than just the posts and content...
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
    );
  }
  
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

  function save_button(){
    return (
      <Box component="span" sx={{p: 1, border: '1px solid grey'}}>
        <Button >Save</Button>
      </Box>
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
        <div style={stil_ljudi}>
          <h2>Currently Online:</h2><br/>
            
        <AvatarGroup total={24}>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
            <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
        </AvatarGroup>
        </div>
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

  function about_info(){
    return(
      <>
      Add Your information about the page below...<br/>
      <form>
        <textarea style={{width: "100%", height: "300px", border: "none" }} placeholder="Enter text here..."/><br/>
      </form>
      {save_button()}
      </>
      
    );
}

 // finalni export
  return (
    <>
    <div class = "content_banner" style={stil_content_banner}>{banner_place()}</div><br/><br/>
    <div class = "content_profile" style={stil_content_profile}>{add_upload()}</div>
    <h1 style={stil_ime}>Ime stranice</h1><br/>
    <p style={stil_podnaslov}>skraceno</p>

    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Home" value="1" />
            <Tab label="Members" value="2" />
            <Tab label="About" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1" sx={stil_home}>
          {Home_options()}
          <Profile/>
          <Content/>
          {/* <Content/>
          <Content/>
          <Content/>
          <br/> */}
          Add More options
        </TabPanel>
        <TabPanel value="2">
          {ljudi()}
          {members_information()}
        </TabPanel>
        <TabPanel value="3"sx={stil_info}>
          {about_info()}
        </TabPanel>
      </TabContext>
    </Box>
    </>
  );

}
