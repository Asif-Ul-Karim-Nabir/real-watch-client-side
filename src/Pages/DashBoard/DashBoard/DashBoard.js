import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link,Route, Switch, NavLink,useRouteMatch } from 'react-router-dom';
import useAuth from '../../hooks/useAuth/useAuth';
import { Button } from '@mui/material';
import MyOrder from '../MyOrder/MyOrder';
import AddReviews from '../AddReviews/AddReviews';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AddProducts from '../AddProducts/AddProducts';


const drawerWidth = 240;

function DashBoard(props) {
  const {logOut,admin} = useAuth()
  let { path, url } = useRouteMatch();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
 
  const drawer = (
    <div>
      <h3 style={{marginBottom:'-47px'}}>Real Watch</h3>
      <Toolbar />
      <Divider />
        <List>
       <NavLink style={{textDecoration:'none',color:'black'}} to="/home">
        Home
      </NavLink>
      </List>
      <List>
       <NavLink style={{textDecoration:'none',color:'black'}} to="/products">
        Products
      </NavLink>
      </List>

      {admin &&<Box>  
        <List>
          <Link style={{textDecoration:'none',color:'black'}} to={`${url}/admin`}>Make Admin</Link> 
          </List>
          <List>      
          <Link style={{textDecoration:'none',color:'black'}} to={`${url}/add-products`}>Add Products</Link>   
          </List>  
          <List>
          <Link style={{textDecoration:'none',color:'black'}} to={`${url}/manage-products`}>Manage Products</Link> 
          </List>
          <List>    
          <Link style={{textDecoration:'none',color:'black'}} to={`${url}/manage-all-orders`}>Manage All Orders</Link>  
          </List>   
        </Box>}

      {!admin   && 
      <Box>  
        <List>        
            <Link style={{textDecoration:'none',color:'black'}} to={`${url}/order`}>My Order</Link>
            </List>    
            <List>
            <Link style={{textDecoration:'none',color:'black'}} to={`${url}/payment`}>Payment</Link>
            </List>
            <List>
            <Link style={{textDecoration:'none',color:'black'}} to={`${url}/reviews`}>Reviews</Link>
            </List>
        </Box>}

      <List>
       <Link style={{textDecoration:'none'}} to="/home">
         <Button sx={{textDecoration:'none',color:'black'}} color="inherit" onClick={logOut}>Log Out</Button></Link></List>
      <Divider />
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            DASHBOARD
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
       
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
         <Switch>
          <Route exact path={path}>
          <h3 style={{height:'100vh'}}>Welcome to our DashBoard !!</h3>
          </Route>
          <Route path={`${path}/order`}>
            <MyOrder></MyOrder>
          </Route>
          <Route path={`${path}/payment`}>
          <h3 style={{height:'100vh'}}>Payment System Is Comming Soon....</h3>
          </Route>
          <Route path={`${path}/admin`}>
          <MakeAdmin></MakeAdmin>
          </Route>
          <Route path={`${path}/add-products`}>
          <AddProducts></AddProducts>
          </Route>
          <Route path={`${path}/manage-products`}>
          <h3 style={{height:'100vh'}}> Manage products will be provided later.</h3>
          </Route>
          <Route path={`${path}/manage-all-orders`}>
          <h3 style={{height:'100vh'}}>Manage all orders will be provided later.</h3>
          </Route>
          <Route path={`${path}/reviews`}>
          <AddReviews></AddReviews>
          </Route>
         </Switch>
    </Box>
  );
}

DashBoard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DashBoard;
