import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { HiOutlineSwitchVertical } from "react-icons/hi";

import './shared.css'; 

const SwitchButton = () => {
  const navigate = useNavigate();
  const location = useLocation();

  let label = "STANDBY MODE"; 

  if (
    location.pathname === "/animal-category" ||
    location.pathname === "/food-category" ||
    location.pathname === "/household-item-category" ||
    location.pathname === "/basic-phrases-category"
  ) {
    label = "INTERACTIVE MODE";
  }

  const handleClick = () => {
    if (
      location.pathname === "/animal-category" ||
      location.pathname === "/food-category" ||
      location.pathname === "/household-item-category" ||
      location.pathname === "/basic-phrases-category"
    ) {
      navigate("/home-standby");
    } else {
      navigate(-1);
    }
  };

  return (
    <button onClick={handleClick} className='switch-btn'>
      <span>{label}</span> 
      <HiOutlineSwitchVertical className='switch-btn-icon'/>
    </button>
  );
};

export default SwitchButton;
