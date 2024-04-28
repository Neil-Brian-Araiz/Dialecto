import React from 'react';

import './shared.css';

const ContentButton = ({ label, bgColor }) => {
    const style = {
        backGroundColor: bgColor
    }

    return (
        <button className='content-btn' style={style}>{label}</button>
    )
}

export default ContentButton;
