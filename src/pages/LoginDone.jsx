import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import '../style/logindone.css';
import { useUser } from './UserContext';

export default function LoginDone() {
    const { updateUser } = useUser();
    const navigate = useNavigate();
    const location = useLocation();
    const userData = location.state && location.state.userData;

    console.log('LoginDone');
    console.log(userData);
    console.log(userData.username);

    const handleNextClick = () => {
        // Update the global user data
        updateUser(userData);
        // Navigate to the new route
        navigate('/v1');
    };

    return (
        <>
            <div className="login-done">
                You have successfully logged in to DreamNote! <br />
                <button onClick={handleNextClick} className="small">
                    Next
                </button>
            </div>
        </>
    );
}
