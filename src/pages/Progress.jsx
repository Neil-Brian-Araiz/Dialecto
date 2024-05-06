import React from 'react';
import { useNavigate } from 'react-router-dom';

import { FaChevronLeft } from "react-icons/fa6";
import GraphSample from '../assets/graph.png';
import GraphSample1 from '../assets/graph1.jpg';
import './page.css';

const ProgressPage = () => {
    const navigate = useNavigate();

    return (
        <div className='progress-wrapper'>
            <div className='progress-header'>
                <button onClick={() => navigate(-1)}>
                    <FaChevronLeft />
                </button>
                <h4>Dialecto Adventure</h4>
            </div>

            <div className='progress-content'>
                <div className='achievement-container'>
                    <h1>Achievements</h1>
                    <div className='ach-wrapper'>
                        <div className='ach-card'>
                            <h4>Favorite Dialectos</h4>
                            <div className='ach-graph'>
                                <img src={GraphSample} alt="Graph" />
                            </div>
                        </div>

                        <div className='ach-card'>
                            <h4>Favorite Categories</h4>
                            <div className='ach-graph'>
                                <img src={GraphSample} alt="Graph" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='mistake-container'>
                    <h1>Mistakes</h1>
                    <div className='ach-card'>
                        <h4>Opps! Let's Try These Again!</h4>
                        <div className='ach-graph'>
                            <img src={GraphSample1} alt="Graph" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProgressPage;
