import React from "react";
import { useState } from "react";
import logo from "../assets/images/CafePannaImage.png";

function NavBar ({setPage}) {
    //hamburger menu
    const [isOpen, setIsOpen] = useState(false) //hamburger menu is not open by default
    const toggleMenu = () => setIsOpen(!isOpen);

    //everything else in nav + opening hamburger menu
    return (
        <div>
            <nav className="nav-logo">
                <img src={logo} alt="Cafe Panna Logo" />
            </nav>
            <nav className="navbar">
                <navbar className="navbar-links">
                    <button onClick={() => setPage('home')}>Home</button>
                    <button onClick={() => setPage('mission')}>Mission</button>
                    <button onClick={() => setPage('specials')}>Specials</button>
                    <button onClick={() => setPage('contact')}>Contact</button>
                </navbar>
                <navbar className="hamburger">
                    <button onClick={() => setPages('bar')}></button>
                </navbar>
            </nav>
            
            {/* hamburger menu is shown on small screen*/}
            <button className={`hamburger ${isOpen ? 'open' : ''}`} onclick={toggleMenu}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </button>
        </div>
    )
}

export default NavBar

