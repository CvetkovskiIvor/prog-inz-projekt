import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import './Head.css'


const Input = styled('input')({
    display: 'none',
});



 function banner_place(){
    return(
      <Box className='stil_banner'>
          {add_upload()}        
      </Box>
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

export default function Header(){
    return(
      <div class='stil_back'>
      <div class='stil_content_banner'>{banner_place()}</div><br/><br/>
      <div class='stil_content_profile'>{add_upload()}</div>
      <h1 class='stil_ime'>Ime stranice</h1><br/>
      <p class='stil_podnaslov'>skraceno</p>
      </div>
    );
  }