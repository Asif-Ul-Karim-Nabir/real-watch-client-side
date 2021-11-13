import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Container, Typography } from '@mui/material';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect( () => {
        fetch('https://peaceful-journey-32516.herokuapp.com/reviews')
        .then(res=>res.json())
        .then(data=>setReviews(data))
    },[])
    return (
        <div style={{backgroundColor:'#F6F6F6'}}>
            
             <Typography sx={{paddingTop:'20px',color:'#1a53ff'}} gutterBottom variant="h4" component="div">
              Reviews
            </Typography>
             
             <Grid >
                {
                    reviews.map(review=><Review
                    key={review._id}
                    review={review}
                    ></Review>)
                }
                </Grid>
            
        </div>
    );
};

export default Reviews;