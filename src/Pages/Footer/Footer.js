import React from 'react';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div style={{backgroundColor:'#1976D2'}}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={6}>
            <h2 className="text-white">Real Watch</h2>
                <Link style={{textDecoration:'none',color:'white'}} to="/register">Register here?</Link>
            </Grid>
            <Grid item xs={1}>
            <Link style={{textDecoration:'none',color:'white'}} to="/home">Home</Link><br />
                <Link style={{textDecoration:'none',color:'white'}} to="/products">Products</Link><br />
                <Link style={{textDecoration:'none',color:'white'}} to="/login">login</Link>
            </Grid>
           
            </Grid>
         
        </div>
    );
};

export default Footer;