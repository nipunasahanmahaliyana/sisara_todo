import React from 'react';
import { Link } from 'react-router-dom';
import './Welcome.css';

const WelcomeScreen = () => {
  return (
    <div className="welcome-container">
      <div className="welcome-content">
        <h1 className="welcome-heading">Welcome to My App</h1>
        <p className="welcome-subheading">We're glad to have you here! Explore the features and start your journey.</p>
        <button className="start-button" onClick={() => <Link to="/todo"></Link>}>
          Get Started
        </button>
      </div>
    </div>
  );
};

export default WelcomeScreen;
