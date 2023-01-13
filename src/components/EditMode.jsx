import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Button, IconButton } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { editMode } from '../redux/actions';
import { updateProduct, getAllProducts } from '../api/calls';
import { allProducts } from '../redux/actions';

import { rows } from '../cofig/data';
import { TextField } from '@mui/material';




export default function BasicTable( { selected } ) {
    const dispatch = useDispatch()
    const [ name, setName ] = React.useState('');
    const [ price, setPrice ] = React.useState('');
    const rows = useSelector(state => state.allProducts)


    let res = []
    for (let row of rows){
        if ( selected.includes(row.name) ){
            selected = selected.filter(item => item !== row.name)
            res.push(row)
        }
    }
    console.log(res)
    
  return (
    <>
    <div style={{ display:'inline-flex' }}>
        <IconButton onClick={ () => dispatch(editMode(false)) } ><ArrowBackIcon /></IconButton>
        
        <h2>Go back to dashboard</h2>
    </div>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id (product id)</TableCell>
            <TableCell align="left">Name</TableCell>
            <TableCell align="center">Image</TableCell>
            <TableCell align="center">Price</TableCell>
            <TableCell align="right">Action</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {res.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
              {row._id}
              </TableCell>

              <TableCell align="right">
                <TextField variant='standard' placeholder={row.name} id='name' 
                value={name} onChange={(e) => {
                    setName(e.target.value);
                }} />
              </TableCell>

              <TableCell align="right">

                    <p>{ row.image }</p>
                    {/* <br></br>
                    
                    <label htmlFor='addImage'>Add image of your product.</label>

                    <input type="file" onChange={handleChange} name='addImage' id='addImage' /> */}
              </TableCell>

              <TableCell align="center">
              <TextField variant='standard' placeholder={row.price} id='name' 
              style={{ width: '50%' }} value= {price} 
              onChange={(e) => {
                setPrice(e.target.value);
              }}/>
              </TableCell>
              <TableCell align='center'>
                <Button onClick={async e => {
                    e.preventDefault();
                    const result = await updateProduct({_id: row._id, name, price })
                    const products = await getAllProducts();
                    console.log(products)
                    dispatch(allProducts(products))
                }} >Done</Button>
              </TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>

  );
}