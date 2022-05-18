import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Button from '@mui/material/Button';
import './Head.css'
///////////////////////////////constants//////////////////////////
const Input = styled('input')({
    display: 'none',
});
//////////////////////////////////variables///////////////////////
var state_follow = 1;
//////////////////////////////functions///////////////////////////
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

  function change(){
      var elem = document.getElementById("follow_button");
      if (elem.value==="Follow"){
        elem.value = "Following";
        elem.style.background = "#0A8AF4";
        state_follow = 2;
      }else{
        state_follow = 1;
        elem.value = "Follow";
        elem.style.background = "#2C2F33";
      }

  }

  function check_state(){
    var tmp =  document.getElementById("follow_button");

    if(state_follow === 1){
        tmp.style.background = "#2C2F33";
        tmp.value = "Follow";
    }else if(state_follow === 2){
        tmp.style.background = "#0A8AF4";
        tmp.value = "Following";
    }
  }

  function follow_button(){
       
    return (
      <>
        <div class='stil_follow'><input onClick={change} type="button" id="follow_button"></input></div>
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
      {check_state}
      {follow_button()}
      </>
    );
  }