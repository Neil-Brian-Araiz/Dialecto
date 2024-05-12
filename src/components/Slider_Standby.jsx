import React from 'react';
import { useNavigate } from 'react-router-dom';

import SliderBtn from './shared/SliderBtn';
import VidThumbnail from '../assets/video.png'

import './components.css'

const SliderStandby = () => {
    const navigate = useNavigate();

    const array = [
        {picture: VidThumbnail, label: 'video title', nav: '/dialecto/video'}, 
        {picture: VidThumbnail, label: 'video title', nav: ''},
        {picture: VidThumbnail, label: 'video title', nav: ''},
        {picture: VidThumbnail, label: 'video title', nav: ''},
        {picture: VidThumbnail, label: 'video title', nav: ''},
        {picture: VidThumbnail, label: 'video title', nav: ''},
        ]
  return (
    <div className='slider'>
        
      <div className='slider-card-container'>
      {array.map((arrayItem) => (
            <div className='slider-card'>
            <div className='slider-card-img'>
                <img src={arrayItem.picture} alt='Video' />
            </div>
            <SliderBtn label={arrayItem.label} navigateTo={() => navigate(arrayItem.nav)} />
        </div>
        ))}
      </div>
    </div>
  )
}

export default SliderStandby;
