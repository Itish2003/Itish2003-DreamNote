import React from 'react';
import { Link } from 'react-router-dom'
import '../style/signupdone.css'

export default function SignUpDone() {
    return (
        <>
            <div className="sign-up-done">
                You have successfully signed up to DreamNote! <br/>
                Please login with your account...<br/>
                <Link to="/v1" className="small">Next</Link>
            </div>
        </>
    )
}