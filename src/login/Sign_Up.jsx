import React from 'react';
import {Link} from 'react-router-dom';

import Logo from '../assets/logo'
import Button from '../components/shared/Btn';

import './logIn.css';
 
const SignUp = () => {
    return (
        <div className='wrapper-signIn'>
            <div className='logo-bg'>
                <Logo />
                <h1>DIALECTO</h1>
            </div>
            <form action="">
                <h2>Create your account</h2>
                <div className='input-box'>  
                    <input type='text' placeholder='Username' required />
                </div>
                <div className='input-box'>  
                    <input type='email' placeholder='Email' required />
                </div>
                <div className='input-box'>  
                    <input type='password' placeholder='Password' required />
                </div>

                <div className='signUp-btn'>
                    <Link to='/sign-in'> <Button label="SIGN UP"/> </Link>
                </div>

                <h5>
                    Already have an account?{' '} 
                    <span>
                        <Link to='/sign-in' className='signUp-link'>Sign In</Link>
                    </span>
                </h5>
            </form>
        </div>
    );
};

export default SignUp;