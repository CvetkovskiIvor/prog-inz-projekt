import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Button from '@mui/material/Button';
import './Head.css'

const Input = styled('input')({
    display: 'none',
});


 function banner_place(){
    return(
      <Box>
      <Stack>
      <label htmlFor="icon-button-banner">
        <Input accept="image/*" id="icon-button-banner" type="file" onClick={SetImmageBanner}/>
        <IconButton color="primary" aria-label="upload picture" component="span">
          <PhotoCamera />
        </IconButton>
      </label>
      </Stack>
      </Box>
    );
  }

  function profile_place(){
    return(
      <Box>
      <Stack>
      <label htmlFor="icon-button-profile">
        <Input accept="image/*" id="icon-button-profile" type="file" onClick={SetImmageProfile}/> 
        <IconButton color="primary" aria-label="upload picture" component="span">
          <PhotoCamera />
        </IconButton>
      </label>
      </Stack>
      </Box>
    );
  }

  function change()
  {
      var elem = document.getElementById("follow_button");

      if (elem.value==="Follow"){
        elem.value = "Following";
        elem.style.background = "#0A8AF4";
      }else{
        elem.value = "Follow";
        elem.style.background = "#2C2F33";
      } 

  }

  function follow_button(){
       
    return (
      <>
        <div class='stil_follow'><input onClick={change} type="button" value="Follow" id="follow_button"></input></div>
      </>
    );
  }

  function SetImmageProfile(){
      const FileInputProfile = document.querySelector("#icon-button-profile");

      FileInputProfile.addEventListener("change", function(){
        const reader = new FileReader();
        reader.addEventListener("load", () => {
          const upload_image = reader.result;
          document.querySelector(".stil_content_profile").style.backgroundImage=`url(`+ upload_image +`)`;
        });
          reader.readAsDataURL(this.files[0]);
      });  

    }

    function SetImmageBanner(){
      const FileInputBanner = document.querySelector("#icon-button-banner");

      FileInputBanner.addEventListener("change", function(){
        const reader_ban = new FileReader();
        reader_ban.addEventListener("load", () =>{
            const upload_image_ban = reader_ban.result;
            document.querySelector(".stil_content_banner").style.backgroundImage=`url(${upload_image_ban})`;
        });
        if(this.files[0]){
          reader_ban.readAsDataURL(this.files[0]);
        }
        
      });
    }


export default function Header(){
    return(
      <>
      <div class='stil_back'>
      <div class='stil_content_banner'>{banner_place()}</div><br/><br/>
      <div class='stil_content_profile'>{profile_place()}</div>
      <h1 class='stil_ime'>Ime stranice</h1><br/>
      <p class='stil_podnaslov'>skraceno</p>
      </div>
      {follow_button()}
      </>
    );
  }