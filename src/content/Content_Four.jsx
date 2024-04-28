import React from 'react';
import { HiSpeakerWave } from "react-icons/hi2";
import { FaMicrophone } from "react-icons/fa6";

import ContentHeader from '../components/ContentHeader';
import ContentButton from '../components/shared/ContentBtn';

import './Content.css';

const ContentFour = () => {
    return (
        <div className='content-one-wrapper'>
            <ContentHeader />

            <div className='content-title'>Listen and Match your Voice</div>

            <div className='content-one-container'>
                <div className='speaker-container'>
                    <HiSpeakerWave className='speaker-icon' />
                    <div className='speaker-btn'>
                        <ContentButton label='Play'/>
                    </div>
                </div>

                <div className='mic-container'>
                    <FaMicrophone className='mic-icon' />
                    <div className='mic-btn'>
                        <ContentButton label='Record'/>
                        <ContentButton label='Done'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContentFour;