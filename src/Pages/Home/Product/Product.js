import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { NavLink } from 'react-router-dom';

const Product = ({product}) => {
    const {_id,name, img, descriptions, price} = product
    return (
            <Card sx={{ maxWidth: 345,margin:'auto'}}>
                <CardActionArea>
                <CardMedia
                    component="img"
                    height="200"
                    image={img}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    {descriptions}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                    Price: ${price}
                    </Typography>
                </CardContent>
                </CardActionArea>
                <CardActions>
                <NavLink style={{textDecoration:'none',color:'white'}} to={`/products/${_id}`}>
                <Button size="small" color="primary" variant="contained">
                    Purchase
                </Button>
                </NavLink>
                </CardActions>
            </Card>
    );
};

export default Product;