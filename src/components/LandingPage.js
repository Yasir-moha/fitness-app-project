import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
    useEffect(() => {
        const bubbleContainer = document.querySelector('.bubble-container');

        const createBubble = () => {
            const bubble = document.createElement('div');
            const size = Math.random() * 60 + 20;
            bubble.classList.add('bubble');
            bubble.style.width = `${size}px`;
            bubble.style.height = `${size}px`;
            bubble.style.left = `${Math.random() * 100}%`;
            bubble.style.animationDuration = `${Math.random() * 15 + 10}s`;
            bubbleContainer.appendChild(bubble);

            setTimeout(() => {
                bubble.remove();
            }, 25000); 
        };

        const bubbleInterval = setInterval(createBubble, 500); 

        return () => clearInterval(bubbleInterval);
    }, []);

    return (
        <div className="landing-container">
            <div className="message-container">
                <h1 className="welcome-message">Welcome to FitLife</h1>
                <p className="sub-message">Your journey to fitness starts here!</p>
                <Link to="/signup" className="signup-link">Sign Up Now</Link>
            </div>
            <div className="bubble-container"></div>
        </div>
    );
};

export default LandingPage;

