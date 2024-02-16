import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'
import '../style/login.css'

export default function Login() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: '',
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

            //sending the data to the backend using fetch api, the response body has formData in json string format also credentials:'include' also send cookies/HTTP authentication
            const response = await fetch('http://localhost:8080/v1/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
                credentials: 'include',
            });

            if (response.ok) {
                // Successful login, fetch user data directly
                const userData = await response.json();
                console.log('User data from login:', userData);

                // Redirect to /v1/logindone or another page
                navigate('/v1/logindone', { state: { userData } });
            } else {
                // Handle error cases
                console.error('Error logging in:', response.statusText);
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
                <div className="login">
                    <h2 className="less-margin-top">Login</h2>
                    <form className="loginForm" onSubmit={handleSubmit}>
                        <label htmlFor="username"><b>Username</b></label>
                        <input
                            type="text"
                            name="username"
                            id="username"
                            placeholder="Enter your username..."
                            value={formData.username}
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
                        <button type="submit">Login</button>
                    </form>
                    <p id="small-font">By continuing, you agree to blog's Conditions of Use and Privacy Notice.</p>
                </div>
            </div>
        </>
    )
}
