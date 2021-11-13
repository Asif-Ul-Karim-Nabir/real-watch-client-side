import { AppBar, Container, Toolbar, Typography } from '@mui/material';
import React from 'react';

const Footer = () => {
    return (
        <div >
           <AppBar position="static" color="primary">
          <Container maxWidth="md">
            <Toolbar>
              <Typography variant="body1" color="inherit">
                © 2022 Real Watch
              </Typography>
            </Toolbar>
          </Container>
        </AppBar>
        </div>
    );
};

export default Footer;