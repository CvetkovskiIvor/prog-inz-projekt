import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import VideogameAssetOffIcon from '@mui/icons-material/VideogameAssetOff';

export default function ContentTemplate() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ bgcolor: 'lightgrey', height: 'auto' }}>
            <Typography variant='h6' component = "div" gutterBottom align = 'left'>
                <a href="https://www.youtube.com/watch?v=_tkY1ZHzHdQ"> 
                    <img src="https://www.google.com" alt=""/>
                </a> 
                Profile name
            </Typography>
            <Typography  variant="h2" component = "div" gutterBottom align= 'left'>
               Post title
            </Typography>
            <Typography  variant="subtitle1" component = "div" gutterBottom align= 'left'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                quasi quidem quibusdam.
            </Typography>
            <div align='left' >
                <IconButton aria-label="VideogameAsset" size="medium">
                <VideogameAssetIcon fontSize="inherit" />
                </IconButton>
                <IconButton aria-label="VideogameAssetOff" size="medium">
                <VideogameAssetOffIcon fontSize="inherit" />
                </IconButton>
            </div>
        </Box>
      </Container>
    </React.Fragment>
  );
}