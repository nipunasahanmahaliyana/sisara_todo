import React from 'react';
import './Welcome.css';
import Logo from '../assets/SG Original.png';

const WelcomeScreen = ({scrollToNextSection}) => {


  return (
    <div className="welcome-container">
      <div className="welcome-content">
        <img src={Logo} alt="sisara group" ></img>
        <h1 className="welcome-heading">Welcome to Sisara To Do App</h1>
        <p className="welcome-subheading">We're glad to have you here! Explore the features and start your journey.</p>
        <button className="start-button" onClick={scrollToNextSection}>
      Get Started
    </button>
      </div>
    </div>
  );
};

export default WelcomeScreen;
