import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
    return (
        <header>
            <Link className="link-title" to='/'>
                <h1>Employee Directory</h1>
            </Link>
            <nav className="link-container">
                <Link className="link-item" to="/Search">
                    Search
                </Link>
            </nav>
        </header>
    );
}

export default Navbar;