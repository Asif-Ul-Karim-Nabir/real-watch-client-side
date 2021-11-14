import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { Alert, Button, CircularProgress, Typography } from '@mui/material';
import { NavLink,useHistory,useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth/useAuth';

const Login = () => {
    const {user,error,logInUser,signInUsingGoogle,isLoading} = useAuth()
    const [logInData, setLoginData] = useState({});
    const location = useLocation()
    const history = useHistory()

    const handleOnChange = (e) => {
        const feild = e.target.name;
        const value = e.target.value;
        const newLogInData = {...logInData}
        newLogInData[feild] = value;
        console.log(newLogInData );
        setLoginData(newLogInData)
    }
    const handleLogInSubmit = (e) => {
        logInUser(logInData?.email, logInData?.password,location,history)
        e.preventDefault()
    }
    return (
        <Box>
            <Grid sx={{marginTop:'5%'}} container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={12} md={6}>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Please LogIn
                    </Typography>
                    {!isLoading && <form onSubmit={handleLogInSubmit}>
                    <TextField      
                    sx={{width:'50%',marginBottom:'15px'}}         
                    label="Your Email"
                    type="email"
                    name="email"
                    onChange={handleOnChange}
                    variant="standard"
                    /> <br />
                    <TextField
                    sx={{width:'50%',marginBottom:'15px'}}   
                    id="standard-password-input"
                    label="Your Password"
                    type="password"
                    name="password"
                    onChange={handleOnChange}
                    autoComplete="current-password"
                    variant="standard"
                    /> <br /> <br />
                    <Button sx={{width:'50%'}}  type="submit"  variant="contained" >LogIn</Button><br /> <br />
                    <NavLink style={{textDecoration:'none',color:'blue'}} to="/register">New User. Create an account?</NavLink>
                    <div>-----------------------------------</div>
                    <Button sx={{width:'25%'}}  type="submit"  variant="contained" onClick={signInUsingGoogle}>Sign In Google</Button>
                    </form>}
                    {isLoading && <CircularProgress />}    
                    {user?.email && <Alert severity="success">User LoggedIn Successfully!</Alert>}
                    {error && <Alert severity="error">{error}</Alert>}
                </Grid>
                <Grid item  xs={12} md={6}>
                    
                </Grid>
            </Grid>
        </Box>
    );
};

export default Login;