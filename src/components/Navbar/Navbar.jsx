import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import logo from '../../assets/logoheader.webp'
import "./Navbar.css"


function Navbar() {
    const [isOpen, setOpen] = useState(false)
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setOpen(!isOpen);
    }

    // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false); // Close the menu if clicking outside
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside); // Cleanup on component unmount
    };
  }, [isOpen]);

    return (
        <nav className='navbar'>
            <div className="logo">
                <img src={logo} alt="" className='App-logo' />
                <p>franciscovieiracode</p>
            </div>

            <div className="menu" ref={menuRef}>
            <button className='hamburger' onClick={toggleMenu}>
                    <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="lg" />
                </button>

                <ul className={`nav-list ${isOpen ? "show" : ""}`}>
                    <li className='nav-item'>
                        <a href="#services" className='navlinks'>Services</a>
                    </li>
                    <li className='nav-item'>
                        <a href="#work" className='navlinks'>Work</a>
                    </li>
                    <li className='nav-item'>
                        <a href="#resume" className='navlinks'>Resume</a>
                    </li>
                    <li className='nav-item'>
                        <a href="#skills" className='navlinks'>Skills</a>
                    </li>
                    <li className='nav-item'>
                        <a href="#contact" className='navlinks'>Contact</a>
                    </li>
                </ul>
            </div>
        </nav>

    )
}

export default Navbar;