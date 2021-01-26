import React, { useContext } from 'react'
import { Button } from '@material-ui/core'
import { NavHashLink as NavLink } from 'react-router-hash-link';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import Brightness2Icon from '@material-ui/icons/Brightness2';

import { ThemeContext } from '../../lib/context'


import './Navbar.css'

function Navbar() {

    const { theme, setTheme } = useContext(ThemeContext);

    const handleThemeToggle = (e) => {
      e.preventDefault();
      setTheme(theme === 'light'? 'dark' : 'light');
    }

    return (
        <nav className="navbar">
            <h3>@hhhrrrttt222111</h3>
            <div className="navbar_left">
                <NavLink to="/#home" smooth={true} spy="true" duration={2000}>
                    <span>Home</span>
                </NavLink>
                <NavLink to="/#about" smooth={true} spy="true" duration={2000}>
                    <span>About</span>
                </NavLink>
                <NavLink to="/#resume" smooth={true} spy="true" duration={2000}>
                    <span>Resume</span>
                </NavLink>
                <NavLink to="/#projects" smooth={true} spy="true" duration={2000}>
                    <span>Projects</span>
                </NavLink>
                <NavLink to="/#blog" smooth={true} spy="true" duration={2000}>
                    <span>Blog</span>
                </NavLink>
                <NavLink to="/#contact" smooth={true} spy="true" duration={2000}>
                    <span>Contact</span>
                </NavLink>     
            </div>
            <div className="navbar_right">
                <Button onClick={handleThemeToggle}>
                    {theme === 'light'? <Brightness2Icon style={{color: 'gray'}}/> : <WbSunnyIcon style={{color: 'yellow'}}/>}
                </Button>
            </div>

        </nav>
    )
}

export default Navbar
