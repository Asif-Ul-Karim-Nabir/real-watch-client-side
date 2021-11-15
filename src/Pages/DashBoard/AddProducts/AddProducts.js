import { Alert } from '@mui/material';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const AddProducts = () => {
    const { register, handleSubmit } = useForm();
    const [success, setSuccess] = useState(false)
  const onSubmit = e =>{
      fetch('https://peaceful-journey-32516.herokuapp.com/products',{
          method:'POST',
          headers:{
              'content-type': 'application/json'
          },
          body:JSON.stringify(e)
      })
      .then(res=>res.json())
      .then(data=>{
        setSuccess(true)  
        console.log(data)
    })
};
    return (
        <div style={{width:'75%',margin:'auto',height:'100vh'}}>
            <form style={{marginTop:'5%'}} onSubmit={handleSubmit(onSubmit)}>
                <input  style={{width:'50%',marginBottom:'20px',height:'30px'}} {...register("name")} placeholder="Name" /><br/>
                <textarea  style={{width:'50%',marginBottom:'20px',height:'100px'}} {...register("descriptions")} placeholder="Descriptions" /><br/>
                <input  style={{width:'50%',marginBottom:'20px',height:'30px'}} type="number" {...register("price")} placeholder="Price" /><br/>
                <input  style={{width:'50%',marginBottom:'20px',height:'30px'}}  {...register("img")} placeholder="Image URL" /><br/>
                <input style={{backgroundColor:'blue',padding:'8px 15px',borderRadius:'5px',border:0,color:'white'}} type="submit" value="Add Product" />
            </form>
            {success && <Alert severity="success">Add Products Successfully!</Alert>}
        </div>
    );
};

export default AddProducts;