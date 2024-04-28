import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { HiOutlineSwitchVertical } from "react-icons/hi";

import './shared.css'; 

const SwitchButton = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const label =
    location.pathname === "/home" ? "INTERACTIVE MODE" : "STANDBY MODE";

  const handleClick = () => {
    const path =
      location.pathname === "/home-standby" ? "/home" : "/home-standby";

    navigate(path);
  };
  return (
    <button onClick={handleClick} className='switch-btn'>
      <span>{label}</span> 
      <HiOutlineSwitchVertical className='switch-btn-icon'/>
    </button>
  );
};

export default SwitchButton;
