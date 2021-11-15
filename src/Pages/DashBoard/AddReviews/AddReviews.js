import { Alert, Button, Grid, TextField } from '@mui/material';
import React, { useState } from 'react';

const AddReviews = () => {
    const [reviews, setReviews] = useState({});
    const [success, setSuccess] = useState(false)

    const handleOnBlur = (e) => {
        const feild = e.target.name;
        const value = e.target.value;
        const newReviews = {...reviews}
        newReviews[feild] = value;
        // console.log(newReviews );
        setReviews(newReviews)
    }
    const handleReviews = e => {
        //collect data 
        const review = {
            ...reviews
        }
        console.log(review);
         // send to the server 
         fetch('https://peaceful-journey-32516.herokuapp.com/reviews',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setSuccess(true)
        })
        e.preventDefault()
    }
    return (
        <div style={{marginLeft:'25%',marginTop:'5%',height:'100vh'}}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid >
            {success && <Alert severity="success">Add Products Successfully!</Alert>}
            <form>
            <TextField
             id="outlined-basic" 
            label="Name"
            name="name"
            onBlur={handleOnBlur}
             variant="outlined"
              /><br /><br />
            <TextField 
            id="outlined-basic" 
            label="Email" 
            name="email"
            onBlur={handleOnBlur}
            variant="outlined" 
            /><br /><br />
            <TextField id="outlined-basic" 
            label="Ratings"
            name="ratings"
            onBlur={handleOnBlur}
             type="number"  
            InputProps={{ inputProps: { min: 0, max: 5 } }} 
            variant="outlined" 
            /><br /><br />
                <TextField
            id="outlined-basic"
            label="Reviews-Text"
            name="review_text"
            multiline
            onBlur={handleOnBlur}
            rows={4}
            variant="outlined"
            /> <br />
            <br />
            <Button onClick={handleReviews} variant="contained">Submit</Button>
            </form>
            </Grid>
            </Grid>
           
        </div>
    );
};

export default AddReviews;