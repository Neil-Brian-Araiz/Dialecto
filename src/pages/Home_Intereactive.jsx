import React from 'react';


import Header from '../components/header';
import Slider from '../components/Slider_Interactive';
import Kite from '../assets/kite.png';
import Kite1 from '../assets/kite1.png';
import Star from '../assets/star1.png';

import './page.css';

const Home = () => {
    return (
        <div className='home-wrapper'>
            <Header />

            <div className='interactive-slider-container'>
                <Slider />
                <img src={Kite} alt="Kite" className='kite'/>
                <img src={Kite1} alt="Kite" className='kite1'/>
                <img src={Star} alt="Star" className='star'/>
            </div>
        </div>
    )
}

export default Home;
