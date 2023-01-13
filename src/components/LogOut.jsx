import React from 'react'
import { Button } from '@mui/material'
import { useDispatch } from 'react-redux'
import { userDetails } from '../redux/actions'

function LogOut() {
    const dispatch = useDispatch()
  return (
    <div>
        <Button variant="contained" onClick={() => dispatch(userDetails(false))} >Log Out</Button>    
    </div>
  )
}

export default LogOut