import React, {useState} from 'react'
import {motion} from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars, faTimes} from '@fortawesome/free-solid-svg-icons'
import logo from '../assets/logoheader.webp'

   
    function Navbar(){
        const [isOpen, setOpen] = useState(false)
    
        const toggleMenu = () => {
            setOpen(!isOpen);
        }

    return (
        <nav className='navbar'>
            <div className="logo">
                <img src={logo} alt="" className='App-logo'/>
                <a href='mailto:exmaple.com?subject=Contact&body=Hello!'>franciscovieiracode</a>
            </div>

            <div className="menu">
                <button className='hamburger' onClick={toggleMenu}>
                    <FontAwesomeIcon icon= {isOpen ? faTimes : faBars} size="lg"/>
                </button>

                <ul className={'nav-list ${isOpen ? "show" : } ""}'}>
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