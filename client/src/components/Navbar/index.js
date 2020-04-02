import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import cat from '../../mew.gif'

function Navbar(props) {
    return (
        <nav id="navbar">
            <div className="nav-wrapper">
                <Link id="logo"to="/" onClick={props.logout}>ChitChat
                    <img src={cat}/>
                </Link>
                <p>{props.user ? `Welcome ${props.user}` : "No user is currently logged in..."}</p>
                <Link id="logout" to="/" onClick={props.logout}>{props.user ? "Logout" : ""}</Link>
            </div>
        </nav>
    );
};

export default Navbar;