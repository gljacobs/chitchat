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
                <p><Link id="logout" to="/" style={props.user ? {} : {visibility: "hidden"}} onClick={props.logout}>Logout</Link></p>
                <p >{props.user ? `Welcome ${props.user}` : "No user is currently logged in..."}</p>
            </div>
        </nav>
    );
};

export default Navbar;