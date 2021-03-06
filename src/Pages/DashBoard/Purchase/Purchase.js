import { Alert, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Button, CardActionArea } from '@mui/material';
import useAuth from '../../hooks/useAuth/useAuth';

const Purchase = () => {
    const {user} = useAuth()
   const {_id} = useParams()
    const [product, setProduct] = useState([]);
    const [orderInfo, setOrderInfo] = useState({});
    const [success,setSuccess] = useState(false)

    useEffect( () => {
        fetch(`https://peaceful-journey-32516.herokuapp.com/products/${_id}`)
        .then(res=>res.json())
        .then(data=>setProduct(data))
    },[])
    const handleOnBlur = (e) => {
        const feild = e.target.name;
        const value = e.target.value;
        const newOrderData = {...orderInfo}
        newOrderData[feild] = value;
        // console.log(newOrderData );
        setOrderInfo(newOrderData)
    }
    const handleOrder = e => {
        // collect data 
        const orders = {
            ...orderInfo,
            productName: product.name,
            price: product.price,
            email: user.email
        }
        
        // send to the server 
        fetch('https://peaceful-journey-32516.herokuapp.com/orders',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orders)
        })
        .then(res=>res.json())
        .then(data=>{
            setSuccess(true)
            console.log(data);
        })
        e.preventDefault()
    }
    return (
        <div style={{marginBottom:'5%'}}>
            <h1>{product?.name}</h1>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid  item xs={12} md={6}>
            <Card sx={{ maxWidth: 345, margin:'auto'}}>
                <CardActionArea>
                <CardMedia
                    component="img"
                    height="200"
                    image={product?.img}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {product?.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    {product?.descriptions}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                    Price: ${product?.price}
                    </Typography>
                </CardContent>
                </CardActionArea>
            </Card>
            </Grid>
            <Grid item xs={12} md={6}>
            <Typography variant="h4" component="div" sx={{ flexGrow: 1,marginBottom:'20px' }}>
                    Purchase
                    </Typography>
                    {success && <Alert severity="success">Order Complete Successfully!</Alert>}
                    <form>
                    <TextField      
                    sx={{width:'50%',marginBottom:'15px'}}         
                    onBlur={handleOnBlur}
                    name="productName"
                    value={product?.name}
                    variant="standard"
                    /> <br />
                    <TextField      
                    sx={{width:'50%',marginBottom:'15px'}}         
                    onBlur={handleOnBlur}
                    name="price"
                    value={product?.price}
                    variant="standard"
                    /> <br />
                    <TextField      
                    sx={{width:'50%',marginBottom:'15px'}}         
                    onBlur={handleOnBlur}
                    type="email"
                    name="email"
                    defaultValue={user?.email}
                    variant="standard"
                    /> <br /> <br />
                    <Button onClick={handleOrder} sx={{width:'50%'}}   variant="contained" >Order Now</Button>
                    </form>
            </Grid>
        </Grid>
        </div>
    );
};

export default Purchase;