import React from 'react';

import SliderBtn from './shared/SliderBtn';
import VidThumbnail from '../assets/video.png'

import './components.css'

const SliderStandby = () => {
    const array = [
        {picture: VidThumbnail, label: 'video title'}, 
        {picture: VidThumbnail, label: 'video title'},
        {picture: VidThumbnail, label: 'video title'},
        {picture: VidThumbnail, label: 'video title'},
        {picture: VidThumbnail, label: 'video title'},
        {picture: VidThumbnail, label: 'video title'},
        ]
  return (
    <div className='slider'>
        
      <div className='slider-card-container'>
      {array.map((arayitem) => (
            <div className='slider-card'>
            <div className='slider-card-img'>
                <img src={arayitem.picture} alt='Video' />
            </div>
            <SliderBtn label={arayitem.label} padding='.4em 1.6em' />
        </div>
        ))}
      </div>
    </div>
  )
}

export default SliderStandby;
