import React from 'react'
import '../style/header.css'
import {Link} from 'react-router-dom'

export default function Header() {
    return (
        <>
            <div className="header">
                <div className="title">DreamNote</div>
                <div className="bar">
                    <div className="about-style">
                        About
                    </div>
                    <div className="github-style">
                        Github
                    </div>
                    <div className="signup-style">
                        <Link to="/v1/signup" className="">
                            Sign Up
                        </Link>
                    </div>
                    <div className="login-style">
                        <Link to="/v1/login" className="">
                            Login
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

