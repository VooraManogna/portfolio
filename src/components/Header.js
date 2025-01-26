import React from 'react';
import './Header.css';

function Header() {
    return (
        <header className="header">
            <div className="logo">Manogna Voora</div>
            <nav>
                <a href="#home">Home</a>
                <a href="#skills">Skills</a>
                <a href="#profiles">Profiles</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </nav>
        </header>
    );
}

export default Header;