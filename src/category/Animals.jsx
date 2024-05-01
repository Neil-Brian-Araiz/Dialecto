import React from 'react';
import { useNavigate } from 'react-router-dom';

import Header from '../components/header';

import CtgButton from '../components/shared/CtgBtn';
import './category.css';

const AnimalCategory = () => {
    const navigate = useNavigate();

    const array = [
        { label: 'Start', nav: '/content-one'}, 
        { label: 'Start', nav: '/content-two', bgColor: 'aqua'},
        { label: 'Start', nav: '/content-three', bgColor: '#7FBCD2'},
        { label: 'Start', nav: '/content-four', bgColor: '#FFEA20'},
        { label: 'Start', nav: '/content-four', bgColor: '#EDB7ED'},
        { label: 'Start', nav: '/content-four', bgColor: '#EDB7ED'},
    ]

    return (
        <div className='category-wrapper'>
            <Header showCategoriesButton={true} showSwitchButton={true} />

            <div className='category-slider animal'>
                <div className='category-card-container'>
                    {array.map((arrayItem, index) =>
                    <div className='category-card animal-br' style={{backgroundColor: arrayItem.bgColor}} key={index}>
                        <CtgButton label={arrayItem.label} navigateTo={() => navigate(arrayItem.nav)} />
                    </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AnimalCategory;