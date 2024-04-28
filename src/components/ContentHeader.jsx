import React from 'react';
import { useNavigate } from 'react-router-dom';

import { FaChevronLeft } from "react-icons/fa6";
import './components.css';

const ContentHeader = () => {
    const navigate = useNavigate();

    return (
        <div className='content-header-container'>
            <button onClick={() => navigate(-1)}>
                <FaChevronLeft className='conter-header-icon' />
                <span>Go Back</span>
            </button>
        </div>
    )
}

export default ContentHeader
