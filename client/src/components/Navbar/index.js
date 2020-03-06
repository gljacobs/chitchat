import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import cat from '../../mew.gif'

function Navbar(props) {
    return (
        <nav id="navbar">
            <div className="nav-wrapper">
                <Link to="/" onClick={props.logout}>ChitChat
                    <img src={cat}/>
                </Link>
                <p>{props.user ? `Welcome ${props.user}` : "No user is currently logged in"}</p>
            </div>
        </nav>
    );
};

export default Navbar;