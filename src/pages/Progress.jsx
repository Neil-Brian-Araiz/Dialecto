import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts';

import { FaChevronLeft } from "react-icons/fa6";
import GraphSample1 from '../assets/graph1.jpg';
import './page.css';

const ProgressPage = () => {
    const navigate = useNavigate();

    const uData = [10, 5, 9, 20, 4, 12, 11];
    const xData = [8, 15, 7, 11];

    const xLabels = [
        'Bisaya',
        'Bicolano',
        'Maranao',
        'Waray',
        'Ilocano',
        'Tausog',
        'Cebuano',
    ];

    const cLabels = [
        'Animal',
        'Basic Phrases',
        'Food',
        'Household Items'
    ];

    const chartSetting = {
        width: 500,
        height: 300,
        sx: {
          [`.${axisClasses.left} .${axisClasses.label}`]: {
            transform: 'translate(-20px, 0)',
          },
        },
      };

      const dataset = [
        {
          animal: 4,
          basicphrases: 8,
          food: 2,
          household: 7,
          dialect: 'Bisaya',
        },
        {
          animal: 9,
          basicphrases: 4,
          food: 2,
          household: 8,
          dialect: 'Bicolano',
        },
        {
          animal: 10,
          basicphrases: 3,
          food: 6,
          household: 4,
          dialect: 'Maranao',
        },
        {
          animal: 4,
          basicphrases: 2,
          food: 2,
          household: 6,
          dialect: 'Waray',
        },
        {
          animal: 7,
          basicphrases: 9,
          food: 2,
          household: 9,
          dialect: 'Ilocano',
        },
        {
          animal: 6,
          basicphrases: 3,
          food: 3,
          household: 4,
          dialect: 'Tusog',
        },
        {
          animal: 7,
          basicphrases: 8,
          food: 5,
          household: 3,
          dialect: 'Cebuano',
        }
      ];
    
    const valueFormatter = (value) => `${value}`;

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
                            <div className="ach-graph">
                                <BarChart
                                    width={550}
                                    height={300}
                                    series={[
                                        { data: uData, id: 'uvId' },
                                    ]}
                                    xAxis={[{ data: xLabels, scaleType: 'band' }]}
                                />
                            </div>
                        </div>

                        <div className='ach-card'>
                            <h4>Favorite Categories</h4>
                            <div className='ach-graph'>
                                <BarChart
                                    width={550}
                                    height={300}
                                    series={[
                                        { data: xData, id: 'uvId' },
                                    ]}
                                    xAxis={[{ data: cLabels, scaleType: 'band' }]}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='mistake-container'>
                    <h1>Mistakes</h1>
                    <div className='ach-card'>
                        <h4>Opps! Let's Try These Again!</h4>
                        <div className='ach-graph'>
                            <BarChart
                                dataset={dataset}
                                xAxis={[{ scaleType: 'band', dataKey: 'dialect' }]}
                                series={[
                                    { dataKey: 'animal', label: 'Animal', valueFormatter },
                                    { dataKey: 'basicphrases', label: 'Basic Phrases', valueFormatter },
                                    { dataKey: 'food', label: 'Food', valueFormatter },
                                    { dataKey: 'household', label: 'Household Items', valueFormatter },
                                ]}
                                {...chartSetting}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProgressPage;
