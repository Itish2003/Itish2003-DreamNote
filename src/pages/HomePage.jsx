
import React, { useState, useEffect } from 'react';
import '../style/header.css';
import '../style/middle.css';
import '../style/home.css';
import Header from './Header';
import Middle from './Middle';



import '../index.css';

export default function HomePage() {
    return (
        <>
            
                <div className="home">
                    <Header />
                    <Middle />
                </div>
            
        </>
    )
}