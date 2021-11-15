import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Grid } from '@mui/material';
import useAuth from '../../hooks/useAuth/useAuth'

const MyOrder = ( ) => {
     const {user} = useAuth()
    const [deletes, setDeletes] = useState({})
    const [order, setOrder] = useState([])

    useEffect( () => {
        fetch('https://peaceful-journey-32516.herokuapp.com/orders')
        .then(res=>res.json())
        .then(data=>setOrder(data))
    },[])
    const handleDelete = (e) =>{
      console.log('delete')
        fetch(`https://peaceful-journey-32516.herokuapp.com/orders/${user?.email}`,{
          method:'DELETE',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(deletes)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setDeletes(data)
  
        })
        e.preventDefault()
    }
    return (
        <Grid item xs={10} md={8} sx={{height:'100vh'}}>
            <h3>My Order : {order.length}</h3>
            <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Product Name</TableCell>
                  <TableCell align="right">Price</TableCell>
                  <TableCell align="right">Email</TableCell>
                  
                </TableRow>
              </TableHead>
              <TableBody>
                {order.map((row) => (
                  <TableRow
                    key={row._id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.productName}
                    </TableCell>
                    <TableCell align="right">{row.price}</TableCell>
                    <TableCell align="right">{row.email}</TableCell>
                    <TableCell align="right">
                    <Button onClick={handleDelete} variant="contained">Delete</Button></TableCell>            
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
    );
};

export default MyOrder;