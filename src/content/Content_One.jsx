import React, { useState, useEffect } from 'react';
import ContentHeader from '../components/ContentHeader';
import ContentButton from '../components/shared/ContentBtn';
import House from '../assets/house.jpg';
import PopUp from '../assets/pop-up.gif';
import './Content.css';

const ContentOne = () => {
  const [showPopup, setShowPopup] = useState(true);

  useEffect(() => {
    let timer;
    const handleInactivity = () => {
      setShowPopup(true);
    };

    // Reset the timer whenever there is user activity
    const handleUserActivity = () => {
      clearTimeout(timer);
      timer = setTimeout(handleInactivity, 15000); // 30 seconds of inactivity
    };

    // Set up event listeners for user activity
    document.addEventListener('mousemove', handleUserActivity);
    document.addEventListener('keypress', handleUserActivity);

    // Initial display of the pop-up
    setShowPopup(true);

    // Clear the timer and remove event listeners when component unmounts
    return () => {
      clearTimeout(timer);
      document.removeEventListener('mousemove', handleUserActivity);
      document.removeEventListener('keypress', handleUserActivity);
    };
  }, []);

  const handleClick = () => {
    setShowPopup(false);
  };

  return (
    <div className='content-one-wrapper' onClick={handleClick}>
        <ContentHeader />

        <div className='content-one-container'>
            <div className='img-wrapper'>
              <div className='img-container'>
                <img src={ House } alt='House'/>
              </div>

              <h2>Bahay</h2>
            </div>

            <div className='choices-container'>
                <h2>Choices</h2>
                <div className='btn-choices-container'>
                  <ContentButton label='Balay'/>
                  <ContentButton label='Bugnaw'/>
                  <ContentButton label='Karabasa'/>
                  <ContentButton label='Kan-on'/>
                </div>
            </div>
        </div>

        {showPopup && (
          <div className='popup'>
            <img src={PopUp} alt="Pop-Up"  />
          </div>
        )}
    </div>
  );
}

export default ContentOne;
