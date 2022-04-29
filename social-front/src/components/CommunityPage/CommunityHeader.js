import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Button from '@mui/material/Button';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';
import Content from '../Posts/Content/Content'; // koristit ce se kasnije
import Profile from '../Profile/Profile';  // koristit ce se kasnije
import Header from '../CommunityPage/CommunityHead/Header'
import './ComPage.css'



export default function Commun() {
  //constants
 

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
      <div className="ModeratorAndUsers" class = 'stil_member_info'>
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
  
 

  function save_button(){
    return (
      <Box component="span" sx={{p: 1, border: '1px solid grey'}}>
        <Button >Save</Button>
      </Box>
    );
  }

 

  function ljudi(){
    return (
        <div className='stil_ljudi'>
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
        <textarea style={{width: "100%", height: "300px", border: "none", backgroundColor: "lightgray"}} placeholder="Enter text here..."/><br/>
      </form>
      {save_button()}
      </>
      
    );
}

 // finalni export
  return (
    <>
    <Header/>

    <Box sx={{ width: '100%', typography: 'body1'}}>
      <TabContext value={value} color="gray">
        <Box sx={{borderColor: 'divider', boxShadow: 1}}>
          <TabList onChange={handleChange} sx={{bgcolor:'rgb(54, 53, 53)'}}>
            <Tab label="Home" value="1" className='stil_tab1'/>
            <Tab label="Members" value="2" className='stil_tab2'/>
            <Tab label="About" value="3" className='stil_tab3'/>
          </TabList>
        </Box>
        <TabPanel value="1" className = 'stil_home'>
          {Home_options()}<br/><br/>
          Add More options
        </TabPanel>
        <TabPanel value="2" className='stil_members'>
          {ljudi()}
          {members_information()}
        </TabPanel>
        <TabPanel value="3" className = 'stil_info'>
          {about_info()}
        </TabPanel>
      </TabContext>
    </Box>
    </>
  );

}
