import React from 'react';
import { HiSpeakerWave } from "react-icons/hi2";

import ContentHeader from '../components/ContentHeader';
import ContentButton from '../components/shared/ContentBtn';

import './Content.css';

const ContentThree = () => {
    return (
        <div className='content-one-wrapper'>
            <ContentHeader />

            <div className='content-title'>Listen and Match the Word</div>

            <div className='content-one-container'>
                <div className='speaker-container'>
                    <HiSpeakerWave className='speaker-icon' />
                    <div className='speaker-btn'>
                        <ContentButton label='Play'/>
                    </div>
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

export default ContentThree;