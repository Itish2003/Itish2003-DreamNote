import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/signup.css';

export default function SignUp() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:8080/v1/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
                credentials: 'include',
            });

            if (response.ok) {
                // Successful signup
                console.log('User signed up successfully');
                // Redirect to /v1/signupdone
                navigate('/v1/signupdone');
            } else {
                // Handle error cases
                console.error('Error signing up:', response.statusText);
                // Display error message to the user
            }
        } catch (error) {
            console.error('Error:', error.message);
            // Handle network errors or other issues
        }
    };

    return (
        <>
            <div className="container">
                <div className="SignUp">
                    <h2 className="less-margin-top">Sign Up</h2>
                    <form className="signupForm" onSubmit={handleSubmit}>
                    <label htmlFor="username"><b>Username</b></label>
                        <input
                            type="text"
                            name="username"
                            id="username"
                            placeholder="Enter your name..."
                            value={formData.username}
                            onChange={handleChange}
                            required
                        /><br />
                        <label htmlFor="email"><b>Email</b></label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Enter your email..."
                            value={formData.email}
                            onChange={handleChange}
                            required
                        /><br />
                        <label htmlFor="password"><b>Password</b></label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        /><br />
                        <button type="submit">Sign Up</button>
                    </form>

                    <p id="small-font">By continuing, you agree to blog's Conditions of Use and Privacy Notice.</p>
                </div>
            </div>
        </>
    );
}
