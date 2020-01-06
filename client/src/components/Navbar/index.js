import React from 'react';
import './style.css';

function Navbar() {
    return (
        <nav id="navbar">
            <div className="nav-wrapper">
                <a href="/">ChitChat
                    <img src="https://images.narrative.org/1.0/images/54518734051519678/largesquare-Pixel-Cat.gif"/>
                </a>
                <p>No user is currently logged in</p>
            </div>
        </nav>
    );
};

export default Navbar;