import React from 'react';
import './FlaskLink.css'

const AnimatedHeading = ({ text }) => {
    return (
      <h1 className="animated-container">
        {text.split('').map((char, index) => (
          <span
            key={index}
            className="animated-text"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </h1>
    );
  };
const FlaskLink = () => {
  return (
    <div className="container">
      <h1><AnimatedHeading text="Welcome to AI-Agriculture app" /></h1>
      <a href="http://127.0.0.1:5000/" target="_blank" rel="noopener noreferrer" className="link">
        Go to Crop Prediction
      </a>
    </div>
  );
};

export default FlaskLink;