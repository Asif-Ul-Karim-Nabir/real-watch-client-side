import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { Alert, Button, CircularProgress, Typography } from '@mui/material';
import { NavLink,useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth/useAuth';

const Register = () => {
    const {user,error,registerUser, signInUsingGoogle,isLoading} = useAuth()
    const [logInData, setLoginData] = useState({});
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
        if(logInData.password !== logInData.password2){
            alert('Your password did not match')
            return
        }
        registerUser(logInData.email, logInData.password,logInData.name,history)
        e.preventDefault();
    }
    return (
        <div style={{marginBottom:'15%'}}>
              <Box>
            <Grid sx={{marginTop:'5%'}} container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={12} md={6}>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Please Register
                    </Typography>
                    {!isLoading &&<form onSubmit={handleLogInSubmit}>
                    <TextField      
                    sx={{width:'50%',marginBottom:'15px'}}         
                    label="Your Name"                    
                    name="name"
                    onChange={handleOnChange}
                    variant="standard"
                    /> <br />
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
                    /> <br /> 
                    <TextField
                    sx={{width:'50%',marginBottom:'15px'}}   
                    id="standard-basic"
                    label="Re-Type Password"
                    type="password"
                    name="password2"
                    onChange={handleOnChange}
                    autoComplete="current-password"
                    variant="standard"
                    /> <br /> <br />
                    <Button sx={{width:'50%'}}  type="submit"  variant="contained" >Register</Button><br /> <br />
                    <NavLink style={{textDecoration:'none',color:'blue'}} to="/login">Already Registered? Please LogIn.</NavLink>
                    <div>-----------------------------------</div>
                    <Button sx={{width:'25%'}}  type="submit"  variant="contained" onClick={signInUsingGoogle}>Sign In Google</Button>
                    </form>} 
                    {isLoading && <CircularProgress />}
                    {user?.email && <Alert severity="success">User Registered Successfully!</Alert>}
                    {error && <Alert severity="error">{error}</Alert>}
                </Grid>
                <Grid item  xs={12} md={6}>
                    
                </Grid>
                </Grid>
            </Box>
        </div>
    );
};

export default Register;