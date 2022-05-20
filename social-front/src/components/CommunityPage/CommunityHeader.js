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
import Profile from '../Profile/Profile';  // koristit ce se kasnije
import Header from '../CommunityPage/CommunityHead/Header'
import Posts from '../Posts/Posts';  // koristit ce se kasnije
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Skeleton from '@mui/material/Skeleton';
import Alert from '@mui/material/Alert';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';
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

  Media.propTypes = {
    loading: PropTypes.bool,
  };

  //ostale stranice prikazane u sidebaru
  function Media(props) {
    const { loading = false } = props;
  
    return (
      <Card sx={{ maxWidth: 345, m: 2, background: 'gray', height: 300}}>
        <CardHeader
          avatar={
            loading ? (
              <Skeleton animation="wave" variant="circular" width={40} height={40} />
            ) : (
              <Avatar
                alt="Ted talk"
                src="https://pbs.twimg.com/profile_images/877631054525472768/Xp5FAPD5_reasonably_small.jpg"
              />
            )
          }
          action={
            loading ? null : (
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            )
          }
          title={
            loading ? (
              <Skeleton
                animation="wave"
                height={10}
                width="80%"
                style={{ marginBottom: 6 }}
              />
            ) : (
              'Ted'
            )
          }
          subheader={
            loading ? (
              <Skeleton animation="wave" height={10} width="40%" />
            ) : (
              '5 hours ago'
            )
          }
        />
        {loading ? (
          <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />
        ) : (
          <CardMedia
            component="img"
            height="140"
            image="https://pi.tedcdn.com/r/talkstar-photos.s3.amazonaws.com/uploads/72bda89f-9bbf-4685-910a-2f151c4f3a8a/NicolaSturgeon_2019T-embed.jpg?w=512"
            alt="Nicola Sturgeon on a TED talk stage"
          />
        )}
  
        <CardContent>
          {loading ? (
            <React.Fragment>
              <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
              <Skeleton animation="wave" height={10} width="80%" />
            </React.Fragment>
          ) : (
            <Typography variant="body2" color="text.secondary" component="p">
              {
                "Why First Minister of Scotland Nicola Sturgeon thinks GDP is the wrong measure of a country's success:"
              }
            </Typography>
          )}
        </CardContent>
      </Card>
    );
  }

  // informacije o korisnicima na members dijelu; padajuca info tablica
  function members_information(){
    return(
      <div className="ModeratorAndUsers" class = 'stil_member_info'>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChangeMemeber('panel1')} sx={{color: 'gray', bgcolor: '#2C2F33'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
          Moderators
          </Typography>
          <Typography sx={{ color: 'gray' }}>...and mails...</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ color: 'lightgray' }}>
            Quiccky300(quicc@gmail.com), Altimus69(succc@gmail.com), _blackSack_(giginigi@hotmail.com), Minecraft_boy123(dirtblocc@gmail.com)
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChangeMemeber('panel2')} sx={{color: 'gray', bgcolor: '#2C2F33'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0, color: 'gray' }}>Top Users</Typography>
          <Typography sx={{ color: 'gray' }}>
            Our most beloved users 
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ color: 'lightgray' }}>
          BananaSplit1991, Make14Ra1n, Gun444MM,.....
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChangeMemeber('panel3')} sx={{color: 'gray', bgcolor: '#2C2F33'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            User rules
          </Typography>
          <Typography sx={{ color: 'gray' }}>
            Filtering has been entirely disabled for whole web server
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{color: 'lightgray'}}>
            Add more rules.....
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChangeMemeber('panel4')} sx={{color: 'gray', bgcolor: '#2C2F33'}} >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>Patreons</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{color: 'lightgray'}}>
            Add those who contribute with more than just the posts and content...
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
    );
  }
  
 
  //save button na about dijelu
  function save_button(){
    return (
      <Box component="span" sx={{p: 1, border: '1px solid grey', background:'#2C2F33'}}>
        <Button >Save</Button>
      </Box>
    );
  }

 
  // informacije o korisnicima i moderatorima stranice
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

  //home gdje stoje postovi i gdje se mogu uplodeat
  function Home_options(){
    return(
      <>
      <label htmlFor="contained-button-file">
          <Input accept="image/*" id="contained-button-file" multiple type="file" />
          <Button variant="contained" component="span">
          Upload
          </Button>
      </label>
      <br/>
      <br/>
      <div>{TransitionAlerts()}</div>
      </>
    );
  }

  //about page dio
  function about_info(){
    return(
      <>
      Add Your information about the page below...<br/>
      <form>
        <textarea style={{width: "100%", height: "300px", border: "none", backgroundColor: "lightgray"}} placeholder="Enter text here..."/><br/>
      </form><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      {save_button()}
      </>
      
    );
}

//alert za uspjesno dodavanje postova
function TransitionAlerts() {
  const [open, setOpen] = React.useState(true);

  return (
    <Box className="stil_alert_box">
      <Collapse in={open}>
        <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          Popup after succesfuly making a post!
        </Alert>
      </Collapse>
    </Box>
    );
  }


 // finalni export
  return (
    <>
    <body>
    <Header/>
    <Box sx={{ width: '85%', typography: 'body1', float: 'left'}}>
      <TabContext value={value}>
        <Box sx={{borderColor: 'divider', boxShadow: 1}}>
          <TabList onChange={handleChange} sx={{bgcolor:'#2C2F33'}} >
            <Tab label="Home" value="1" sx={{color:'whitesmoke'}}/>
            <Tab label="Members" value="2" sx={{color:'whitesmoke'}}/>
            <Tab label="About" value="3" sx={{color:'whitesmoke'}}/>
          </TabList>
        </Box>
        <TabPanel value="1" className = 'stil_home'>
          {Home_options()}<br/><br/>
          {/*mergat granu pa dodat posts */}
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
    <Box className='stil_sidebar'>
      <Media/>
      <Media/>
      <Media/>
      <Media/>
      <Media/>
      <Media/>
      <Media/>
      <Media/>
      <Media/>
      <Media/>
    </Box>
    </body>
    </>
  );

}
