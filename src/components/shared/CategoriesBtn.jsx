import React from 'react';
import { BiSolidCategory } from "react-icons/bi";
import { Link } from 'react-router-dom';

import './shared.css';

const CategoriesButton = () => {
  return (
    <div className='drop-btn-container'>
      <button className='drop-btn'>
        <span>categories</span>
        <BiSolidCategory className='drop-btn-icon'/>
      </button>
      <div className='drop-btn-content'>
        <Link to='/animal-category' className='drop-content'>Animal</Link>
        <Link to='/basic-phrases-category' className='drop-content'>Basic Phrases</Link>
        <Link to='/food-category' className='drop-content'>Food</Link>
        <Link to='/household-item-category' className='drop-content'>Houseold Items</Link>
      </div>
    </div>
  )
}

export default CategoriesButton;
