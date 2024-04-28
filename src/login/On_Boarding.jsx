import React from 'react';
import {Link} from 'react-router-dom';

import Logo from '../assets/logo';
import Button from '../components/shared/Btn';

import './logIn.css';

function OnBoarding() {
    return(
        <div className='wrapper'>
            <Logo />
            <h1>DIALECTO</h1>
            <p>
            Lorem ipsum lorem ipsum heas jsbdf asdnfsd shbdfhs ksdf ksjdf ksdjf 
            </p>
            
            <div className='btn-container'>
                <Link to='/sign-up'>
                    <Button label="GET STARTED" outline={false} />
                </Link>
                <Link to='/sign-in'>
                    <Button label="I HAVE AN ACCOUNT" outline={true} />
                </Link>
            </div>
        </div>
    );
}

export default OnBoarding;