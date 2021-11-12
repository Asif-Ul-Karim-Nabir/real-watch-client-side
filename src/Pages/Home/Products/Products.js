import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Product from '../Product/Product';
import { Container } from '@mui/material';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect( () => {
        fetch('https://peaceful-journey-32516.herokuapp.com/products')
        .then(res=>res.json())
        .then(data=>setProducts(data.slice(0,6)))
    },[])
    return (
        <Container>
             <Box sx={{ width: '100%' ,marginTop:'50px',marginBottom:'50px'}}>
             <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    products.map(product=><Product
                    key={product.name}
                    product={product}
                    ></Product>)
                }
                </Grid>
            </Box>
        </Container>
    );
};

export default Products;