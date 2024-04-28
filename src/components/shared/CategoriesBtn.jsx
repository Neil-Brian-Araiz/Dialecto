import React from 'react'
import { BiSolidCategory } from "react-icons/bi";

import './shared.css';

const CategoriesButton = () => {
  return (
    <div className='drop-btn-container'>
      <button className='drop-btn'>
        <span>categories</span>
        <BiSolidCategory className='drop-btn-icon'/>
      </button>
      <div className='drop-btn-content'>
        <a href='#'>Option 1</a>
        <a href='#'>Option 2</a>
        <a href='#'>Option 3</a>
        <a href='#'>Option 4</a>
      </div>
    </div>
  )
}

export default CategoriesButton;
