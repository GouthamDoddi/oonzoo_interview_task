import { Button, FormGroup, Grid } from '@mui/material'
import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { addProduct } from '../api/calls';

function AddItem() {
    const [file, setFile] = useState();
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [ fileName, setFileName ] = useState('');


    function handleChange(e) {
        setFileName(e.target.files[0].name)
        console.log('---')
        // console.log(e.inputRef.current.files[0].name)
        setFile(URL.createObjectURL(e.target.files[0]));
    }
  
    return (
        <>
        <FormGroup>
            <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            >
                <Grid container spacing={2} style={{ width: 'auto' }}> 


                    <Grid xs={12} sm={6} >
                        {/* <label htmlFor='productName'>Product name</label>
                        // <input type='text' name='ProductName' id="ProductName" ></input> */}
                        <TextField id="ProductName" name='ProductName' label="Product name"
                        value={name} variant="standard" onChange={e => setName(e.target.value)} />
                    

                        <br></br>

                        <br></br>

                        {/* <label htmlFor='productName'>Product decription</label> */}
                        {/* <input type='text' name='ProductDecription' id="ProductDecription" ></input> */}
                        <TextField label="Decription" name="ProductDecription" id="ProductDecription"
                         variant="standard"  />
                    
                    
                        
                        <br></br>
                        <br></br>

                
                        {/* <lable htmlFor='productPrice'>Product price</lable>
                        <input type='number' id='ProductPrice' name='ProductPrice' ></input> */}
                        <TextField value={price} label="Price" name="ProductPrice" id="ProductPrice"
                         variant="standard" onChange={e => setPrice(e.target.value)} />
                        <br></br>

                        <br></br>

                        <br></br>
                        <br></br>
                        <br></br>


                        <Button onClick = {async() => {
                            const result = await addProduct({name, price, image: fileName});
                            console.log(result);
                        } }>Add product</Button>
                    
                    </Grid>
                    <Grid xs={12} sm={6} >
                    
                        {
                            file
                            ? <img src={file} width={250} height={250} />
                            : <></>
                        }

                        <br></br>
                        
                        <label htmlFor='addImage'>Add image of your product.</label>

                        <input type="file" onChange={e => handleChange(e)} name='addImage' id='addImage' />
                        

                    </Grid>
                </Grid>
            </Box>
        </FormGroup>
        </>
  
    );
}

export default AddItem