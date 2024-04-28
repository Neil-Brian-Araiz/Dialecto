import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { IoClose } from "react-icons/io5";

import HamburgerMenu from './shared/Hamburger';
import SwitchButton from './shared/SwitchBtn';
import FilterIcon from './shared/Filter';
import SearchIcon from './shared/Search';
import Button from './shared/Btn';
import IconButton from './shared/IconBtn';
import CategoriesButton from './shared/CategoriesBtn';
import ProfileIcon from '../assets/profile.png';
import ProgressIcon from '../assets/progress.png';

import './components.css';

const Header = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const sidebarRef = useRef();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                setSidebarOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const closeSidebar = () => {
        setSidebarOpen(false);
    };

    return (
        <div className='header-container'>
            <HamburgerMenu onClick={toggleSidebar} />

            <div className={`sidebar ${sidebarOpen ? 'open' : ''}`} ref={sidebarRef}>
                <button className="close-btn" onClick={closeSidebar}>
                    <IoClose />
                </button>
                
                <div className='sidebar-nav'>
                    <IconButton imageUrl={ProfileIcon} label="Profile" bgColor="var(--primary-color)" />
                    <IconButton imageUrl={ProgressIcon} label="Progress" bgColor="var(--primary-color)" /> 
                </div>
                
                <Link to='/'>
                    <Button label='Log out' outline={false} bgColor='var(--secondary-color)' width='230px' />
                </Link>
            </div>

            <div className='right-container'>
                <CategoriesButton />
                <SwitchButton />
                <FilterIcon />
                <SearchIcon />
            </div>
        </div>
    );
};

export default Header;
