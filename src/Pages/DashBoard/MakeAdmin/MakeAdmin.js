import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email ,setEmail] = useState('')
    const [succes,setSuccess] = useState(false)
    const handleOnBlur = e => {
        setEmail(e.target.value)
    }
    const handleMakeAdmin = e => {
        const user = {email}
        fetch('https://peaceful-journey-32516.herokuapp.com/users/admin',{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount){
                setEmail('')
                setSuccess(true)
                console.log(data)
            }
        })
        e.preventDefault()
    }
    return (
        <div style={{height:'100vh',marginLeft:'20%'}}>
            <h2>Make an Admin</h2>
            <form style={{marginLeft:'5%'}} onSubmit={handleMakeAdmin}>
            <TextField  
             label="Email"
             type="email"
             onBlur={handleOnBlur}
              variant="standard" /><br/><br />
              <Button type="submit" variant="contained">Make Admin</Button>
            </form>
            {succes && <Alert severity="success">Made Admin Successfully!</Alert>}
        </div>
    );
};

export default MakeAdmin;