import React from 'react';
import './style.css';
import cat from '../../mew.gif'

function Navbar(props) {
    return (
        <nav id="navbar">
            <div className="nav-wrapper">
                <a href="/">ChitChat
                    <img src={cat}/>
                </a>
                <p>{props.user ? `Welcome ${props.user}` : "No user is currently logged in"}</p>
            </div>
        </nav>
    );
};

export default Navbar;