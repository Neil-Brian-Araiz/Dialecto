import React from 'react';
import { useNavigate } from 'react-router-dom';

import SliderBtn from './shared/SliderBtn';
import VidThumbnail from '../assets/video.png'

import './components.css'

const SliderStandby = () => {
    const navigate = useNavigate();

    const array = [
        {picture: VidThumbnail, label: 'Common Phrases', nav: '/dialecto/video'}, 
        {picture: VidThumbnail, label: 'Meet the animals', nav: ''},
        {picture: VidThumbnail, label: 'What to eat?', nav: ''},
        {picture: VidThumbnail, label: 'What is in my house?', nav: ''},
        {picture: VidThumbnail, label: 'Video Tittle', nav: ''},
        {picture: VidThumbnail, label: 'Video Tittle', nav: ''},
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
