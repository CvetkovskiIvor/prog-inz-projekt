import React from "react";
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';

const Popup = props => {
  return (
    <div className="popup-box">
      <div className="box">
       <IconButton 
       aria-label="close" 
       onClick={props.handleClose}
       className="close-icon2"
       >
        <CloseIcon />
      </IconButton>
        {props.content}
      </div>
    </div>
  );
};

export default Popup;