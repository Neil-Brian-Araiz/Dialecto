import React from 'react';
import { useNavigate } from 'react-router-dom';

import SliderBtn from './shared/SliderBtn';
import DiaclectImg from '../assets/dialect.jpg';



import './components.css'

const Slider = () => {
    const navigate = useNavigate();

    const array = [
        {pic: DiaclectImg, label: 'Dialect 1', nav: '/content-one'}, 
        {pic: DiaclectImg, label: 'Dialect 2', nav: '/content-two', bgColor: 'aqua'},
        {pic: DiaclectImg, label: 'Dialect 3', nav: '/content-three', bgColor: '#7FBCD2'},
        {pic: DiaclectImg, label: 'Dialect 4', nav: '/content-four', bgColor: '#FFEA20'},
        {pic: DiaclectImg, label: 'Dialect 5', nav: '/content-four', bgColor: '#EDB7ED'},
        {pic: DiaclectImg, label: 'Dialect 6', nav: '/content-four', bgColor: '#EDB7ED'},
    ]

  return (
    <div className='slider'>
        <div className='slider-card-container'>
            {array.map((arrayItem, index) =>
            <div className='slider-card' style={{backgroundColor: arrayItem.bgColor}} key={index}>
                <div className='slider-card-img'>
                    <img src={arrayItem.pic} alt='Dialect' />
                </div>
                <SliderBtn label={arrayItem.label} navigateTo={() => navigate(arrayItem.nav)} />
            </div>
            )}
        </div>
    </div>
  )
}

export default Slider;
