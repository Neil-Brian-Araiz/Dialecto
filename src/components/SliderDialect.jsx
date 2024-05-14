import React from 'react';
import { useNavigate } from 'react-router-dom';

import SliderBtn from './shared/SliderBtn';
import DiaclectImg from '../assets/dialect.jpg';



import './components.css'

const Slider = () => {
    const navigate = useNavigate();

    const array = [
        {pic: DiaclectImg, label: 'Waray', nav: '/dialecto/animal-category'}, 
        {pic: DiaclectImg, label: 'Ilocano', nav: '', bgColor: 'aqua'},
        {pic: DiaclectImg, label: 'Cebuano', nav: '', bgColor: '#7FBCD2'},
        {pic: DiaclectImg, label: 'Tausog', nav: '', bgColor: '#FFEA20'},
        {pic: DiaclectImg, label: 'Bicolano', nav: '', bgColor: '#EDB7ED'},
        {pic: DiaclectImg, label: 'Maranao', nav: '', bgColor: '#EDB7ED'},
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
