import React from 'react';
import './style.css';

function Navbar() {
    return (
        <nav id="navbar">
            <div className="nav-wrapper">
                <a href="/">ChitChat</a>
                <p>No user is currently logged in</p>
            </div>
        </nav>
    );
};

export default Navbar;