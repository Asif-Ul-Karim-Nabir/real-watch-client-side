import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid, Rating } from '@mui/material';

const Review = ({review}) => {
    const {name,email,ratings,review_text} = review
    return (
       <Grid item md={12}>
            <Card >
        <CardActionArea>
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            {email}
            </Typography>
            <Rating name="read-only" value={ratings} readOnly />
            <Typography gutterBottom variant="h5" component="div">
             {review_text}
            </Typography>
        </CardContent>
        </CardActionArea>
    </Card>
       </Grid>
    );
};

export default Review;