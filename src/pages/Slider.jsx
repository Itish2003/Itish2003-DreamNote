import React from 'react';
import { useUser } from './UserContext';
import '../style/slider.css';
import {Link} from 'react-router-dom';

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
        } else {
            return (
                <>
                    {userData && (
                        <button className="toggle-button" onClick={toggleSlider}>
                            Hello, {user.userData.username} {/* Access a specific property, e.g., username */}
                        </button>
                    )}
                </>
            )
        }
    }

    return (
        <div className={`slider ${isOpen ? 'open' : ''}`}>
            {text(userData)}
            <div className="slider-content">
                <h2>Welcome to the Slider</h2>
                <p>This is some example content inside the slider. You can customize it as needed.</p>
            </div>
        </div>
    );
};

export default Slider;