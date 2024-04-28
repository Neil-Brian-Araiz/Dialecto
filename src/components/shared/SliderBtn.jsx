import React from 'react';

import './shared.css';

const SliderBtn = ({ label, width, padding, bgColor, color, navigateTo }) => {
    const style = {
        width: width,
        padding: padding,
        backgroundColor: bgColor,
        color: color
    };

    return (
        <button className='slider-btn' style={style} onClick={() => navigateTo()}>
            {label}
        </button>
    );
};

export default SliderBtn;
