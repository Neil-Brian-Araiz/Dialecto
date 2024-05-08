import React from 'react';

import ContentHeader from '../components/ContentHeader';
import ContentButton from '../components/shared/ContentBtn';
import GIF from '../assets/logo.gif';

import './Content.css';

const ContentTwo = () => {
  return (
    <div className='content-one-wrapper'>
        <ContentHeader />

        <div className='content-title'>Select the correct words</div>

        <div className='content-one-container'>
            <div className='gif-container'>
                <img src={ GIF } alt='GIF' />
            </div>

            <div className='choices-container'>
                <h2>Choices</h2>
                <div className='btn-choices-container'>
                  <ContentButton label='Kalabaw'/>
                  <ContentButton label='Karabaw'/>
                  <ContentButton label='Kambing'/>
                  <ContentButton label='Kamote'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContentTwo;