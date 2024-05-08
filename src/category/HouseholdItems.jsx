import React from 'react';
import { useNavigate } from 'react-router-dom';

import Header from '../components/header';

import CtgButton from '../components/shared/CtgBtn';
import './category.css';

const HouseholdItems = () => {
    const navigate = useNavigate();

    const array = [
        { label: 'Start', nav: '/dialecto/content-one'}, 
        { label: 'Start', nav: '/dialecto/content-two', bgColor: 'aqua'},
        { label: 'Start', nav: '/dialecto/content-three', bgColor: '#7FBCD2'},
        { label: 'Start', nav: '/dialecto/content-four', bgColor: '#FFEA20'},
        { label: 'Start', nav: '/dialecto/content-four', bgColor: '#EDB7ED'},
        { label: 'Start', nav: '/dialecto/content-four', bgColor: 'lightgreen'},
    ]

    return (
        <div className='category-wrapper'>
            <Header showCategoriesButton={true} showSwitchButton={true} />

            <div className='category-slider household'>
                <div className='category-card-container'>
                    {array.map((arrayItem, index) =>
                    <div className='category-card household-br' style={{backgroundColor: arrayItem.bgColor}} key={index}>
                        <CtgButton label={arrayItem.label} navigateTo={() => navigate(arrayItem.nav)} />
                    </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default HouseholdItems;