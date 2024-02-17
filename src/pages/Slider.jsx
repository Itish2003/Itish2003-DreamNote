import React from 'react';
import { useUser } from './UserContext';
import '../style/slider.css';
import { Link } from 'react-router-dom';
import profileImg from '../assets/Itish.jpg';
import noImg from '../assets/noImg.jpeg';

const Slider = ({ isOpen, toggleSlider, user }) => {
    const { userData } = useUser();
    console.log("Slider", userData);

    const text = (userData) => {
        if (userData === null) {
            return (
                <>
                    <button className="toggle-button" onClick={toggleSlider}>
                        <Link to="/v1/login">Please log in...</Link>
                    </button>
                </>
            )
        }
        return (
            <>
                {userData && (
                    <button className="toggle-button" onClick={toggleSlider}>
                        Hello, {user.userData.username}
                    </button>
                )}
            </>
        )
    }

    const mail = (userData) => {
        if (userData === null) {
            return (
                <>
                    <button className="btn border margin margin-more">
                        <Link to="/v1/login">Guest...</Link>
                    </button>
                </>
            )
        }
        return (
            <>
                {userData && (
                    <button className="btn border margin margin-more email-button">
                        {user.userData.email}
                    </button>
                )}
            </>
        )
    }

    const img = (userData) => {
        if (userData === null) {
            return (
                <>
                    <div className="circular-container">
                        <img
                            src={noImg}
                            alt="Circular Image"
                            className="circular-image"
                        />
                    </div>
                </>
            )
        }
        return (
            <>
                <div className="circular-container">
                    <img
                        src={profileImg}
                        alt="Circular Image"
                        className="circular-image"
                    />
                </div>
            </>
        )
    }

    return (
        <>
            <div className={`slider ${isOpen ? 'open' : ''}`}>
                {text(userData)}
                <div className="slider-content">
                    {img(userData)}
                    {mail(userData)}
                    <div className="margin">
                        <button className="btn">
                            Blogs
                        </button>
                    </div>
                    <div className="margin">
                        <button className="btn">
                            Settings
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Slider;
