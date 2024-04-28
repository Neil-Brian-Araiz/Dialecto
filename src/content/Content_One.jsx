import React from 'react';

import ContentHeader from '../components/ContentHeader';
import ContentButton from '../components/shared/ContentBtn';
import Try from '../assets/video.png';

import './Content.css';

const ContentOne = () => {
  return (
    <div className='content-one-wrapper'>
        <ContentHeader />

        <div className='content-one-container'>
            <div className='img-wrapper'>
              <div className='img-container'>
                <img src={ Try } alt='Try'/>
              </div>

              <h2>Bahay</h2>
            </div>

            <div className='choices-container'>
                <h2>Choices</h2>
                <div className='btn-choices-container'>
                  <ContentButton label='Choice 1'/>
                  <ContentButton label='Choice 2'/>
                  <ContentButton label='Choice 3'/>
                  <ContentButton label='Choice 4'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContentOne;
