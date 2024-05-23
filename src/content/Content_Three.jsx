import React from 'react';
import { HiSpeakerWave } from "react-icons/hi2";

import ContentButton from '../components/shared/ContentBtn';

import './Content.css';

const ContentThree = ({ onCorrect, onIncorrect }) => {

  const handleAnswer = (label) => {
    if (label === 'Choice 3') {
      onCorrect();
    } else {
      onIncorrect();
    }
  };

  return (
    <div className='content-one-wrapper'>
        <div className='content-title'>Tap what you hear</div>

        <div className='content-one-container'>
            <div className='speaker-container'>
                <HiSpeakerWave className='speaker-icon' />
                <div className='speaker-btn'>
                    <ContentButton label='Play' />
                </div>
            </div>

            <div className='choices-container'>
                <h2>Choices</h2>
                <div className='btn-choices-container'>
                    <ContentButton label='Choice 1' onClick={() => handleAnswer('Choice 1')} />
                    <ContentButton label='Choice 2' onClick={() => handleAnswer('Choice 2')} />
                    <ContentButton label='Choice 3' onClick={() => handleAnswer('Choice 3')} />
                    <ContentButton label='Choice 4' onClick={() => handleAnswer('Choice 4')} />
                </div>
            </div>
        </div>
    </div>
  );
}

export default ContentThree;
