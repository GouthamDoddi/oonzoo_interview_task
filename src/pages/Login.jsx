import Checkbox from '@mui/material/Checkbox';
import React, { useState } from "react";
import FormControlLabel from '@mui/material/FormControlLabel';
import { registerUser, LoginUser, getAllProducts } from '../api/calls';

import { useDispatch } from 'react-redux';
import { allProducts, userDetails } from '../redux/actions';


export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [ admin, setAdmin ] = useState(false)
    const [ register, setRegister ] = useState(false);
    const dispatch = useDispatch()

    // const handleSubmit = async(e) => {
    //     e.preventDefault();
    //     console.log({email, admin});
    //     await registerUser({ email, pass, admin })
    // }

    // const handleSubmitLogIn  = async e => {
    //     e.preventDefault();
    //     const result = await LoginUser({ email, pass })
    //     console.log(result)
    // }
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    return (
        <>
        {
            register
        ?         
        <div className="auth-form-container" style={{ 'background-image': 'linear-gradient(79deg, #ebe9ee, #fff 48%, #d7e2f1)',
            color: 'black' }}>
        <h2>Register</h2>
        <form className="register-form" onSubmit={async e => {
                    e.preventDefault();
                    console.log({email, admin});
                    await registerUser({ email, pass, admin })
        } } >
        <label htmlFor="email">email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
        <label htmlFor="password">password</label>
        <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
        <button type="submit">Register</button>
        <FormControlLabel control={<Checkbox onChange= {() => setAdmin(!admin)} /> } label="Are you an admin?" />

    </form>
    <button className="link-btn" style={{ color: 'black' }} onClick={() => setRegister(false)}>Already have an account? Login here.</button>
</div>
        :
        <div className="auth-form-container" style={{ 'background-image': 'linear-gradient(79deg, #ebe9ee, #fff 48%, #d7e2f1)',
        color: 'black' }}>
            <h2>Login</h2>
            <form className="login-form" onSubmit={async e => {
                e.preventDefault();
                const result = await LoginUser({ email, pass })
                if (result[0]) {
                    console.log(result)
                    
                    
                    const products = await getAllProducts();
                    console.log(products)
                    dispatch(allProducts(products))
                    
                    dispatch(userDetails({
                        email,
                        admin: result[1] ? true: false
                    }))
                }
            }  } >
                <label htmlFor="email">email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button type="submit" >Log In</button>
            </form>
            <button className="link-btn" style={{ color:'black' }} onClick={() => setRegister(true)}>Don't have an account? Register here.</button>
        </div>
        }
        </>
    )
}