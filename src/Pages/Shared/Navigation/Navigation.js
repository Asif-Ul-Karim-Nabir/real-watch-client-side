import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth/useAuth';
import { Grid } from '@mui/material';

const Navigation = () => {
  const {user, logOut} = useAuth()
    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
           
                <Grid item xs={3} md={6}>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                      Real Watch
                    </Typography>
                </Grid>
                <Grid item xs={9} md={6}>            
                    <NavLink style={{textDecoration:'none',color:'white'}} to="/home">
                    <Button color="inherit">Home</Button>
                    </NavLink>
                    <NavLink style={{textDecoration:'none',color:'white'}} to="/products">
                    <Button color="inherit">Products</Button>
                    </NavLink>
                    {user?.email && <NavLink style={{textDecoration:'none',color:'white'}} to="/dashboard">
                      <Button color="inherit">DashBoard</Button>
                    </NavLink> }
                    {
                      user?.email ?
                      <Button sx={{textDecoration:'none',color:'white'}} color="inherit" onClick={logOut}>Log Out</Button>
                      :
                      <NavLink style={{textDecoration:'none',color:'white'}} to="/login">
                      <Button color="inherit">Login</Button>
                    </NavLink>
                    }
                </Grid>        
          </Toolbar>
        </AppBar>
      </Box>
    );
};

export default Navigation;