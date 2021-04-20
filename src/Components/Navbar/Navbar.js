import React, { useContext, useState, useRef, useEffect } from 'react'
import { IconButton, Button, ListItem, ListItemText, Drawer, Divider, List } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import Brightness2Icon from '@material-ui/icons/Brightness2';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { IoMdHome, IoIosPerson, IoIosPaper, IoIosBook, IoMdCode, IoMdCall } from "react-icons/io";

import { ThemeContext } from '../../lib/context'


import './Navbar.css'
import HrtDialog from './HrtDialog/HrtDialog';



function Navbar() {

    const { theme, setTheme } = useContext(ThemeContext);

    const [open, setOpen] = useState(false);

    const handleThemeToggle = (e) => {
      e.preventDefault();
      setTheme(theme === 'light'? 'dark' : 'light');
    }

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const useStyles = makeStyles({
        MuiDrawer: {
            padding:'1em 1.8em',
            width:'11em',
            fontFamily:' Roboto',
            fontStyle:' normal',
            fontWeight:' normal',
            fontSize:' 24px',
            backgroundColor: theme === 'light' ? '#e6ffee' : 'black',
        },
        drawerItem: {
            color: theme === 'light' ? '#003311' : '#80ffaa',
        },
        closebtnIcon: {
            color: theme === 'light' ? '#003311' : '#80ffaa',
            fontSize: '1.85rem',
            cursor: 'pointer'
        }
    });

    const classes = useStyles();

    return (
        <>

            <IconButton
                    style={{borderRadius: '100%', color: theme === 'light' ? '#181a1b' : '#4dff88'}}
                    disableFocusRipple={true}
                    disableRipple={true}
                    onClick={handleDrawerOpen}
                    className="menuDrawerIcon"
                >
                    <MenuIcon style={{fontSize: '2.5rem'}}/>
            </IconButton>
        <nav className="navbar">
            <Drawer     
                variant="temporary"
                onBackdropClick={handleDrawerClose}
                onEscapeKeyDown={handleDrawerClose}
                anchor="left"
                open={open}
                classes={{ paper: classes.MuiDrawer }}
                className="drawer"
            >
                <div className="div-closebtn">
                    <CloseIcon onClick={handleDrawerClose} className={classes.closebtnIcon}/>
                </div><br/>
                <IconButton onClick={handleThemeToggle} className="theme-toggler">
                                {theme === 'light'? <Brightness2Icon style={{color: '#003311'}}/> : <WbSunnyIcon style={{color: '#80ffaa'}}/>}
                </IconButton>
                <div onClick={handleDrawerClose}>
                <List>
                    <NavLink to="/#home" className="drawerLinks" smooth={true} spy="true" duration={2000}>
                        <ListItem className={classes.drawerItem}>
                            <ListItemText>
                               <IoMdHome className="nav_icon"/> HOME
                            </ListItemText>
                        </ListItem>
                    </NavLink>
                    <Divider className="drawer-divider"/>

                    <NavLink to="/#about" className="drawerLinks" smooth={true} spy="true" duration={2000}>
                        <ListItem className={classes.drawerItem}>
                            <ListItemText>
                                <IoIosPerson className="nav_icon"/> ABOUT
                            </ListItemText>
                        </ListItem>
                    </NavLink>
                    <Divider className="drawer-divider"/>

                    <NavLink to="/#resume" className="drawerLinks" smooth={true} spy="true" duration={2000}>
                        <ListItem className={classes.drawerItem}>
                            <ListItemText>
                                <IoIosPaper className="nav_icon"/> RESUME
                            </ListItemText>
                        </ListItem>
                    </NavLink>
                    <Divider className="drawer-divider"/>

                    <NavLink to="/#projects" className="drawerLinks" smooth={true} spy="true" duration={2000}>
                        <ListItem className={classes.drawerItem}>
                            <ListItemText>
                                <IoMdCode className="nav_icon"/>PROJECTS
                            </ListItemText>
                        </ListItem>
                    </NavLink>
                    <Divider className="drawer-divider"/>

                    <NavLink to="/#blog" className="drawerLinks" smooth={true} spy="true" duration={2000}>
                        <ListItem className={classes.drawerItem}>
                            <ListItemText>
                                <IoIosBook className="nav_icon"/> BLOG
                            </ListItemText>
                        </ListItem>
                    </NavLink>
                    <Divider className="drawer-divider"/>

                    <NavLink to="/#contact" className="drawerLinks" smooth={true} spy="true" duration={2000}>
                        <ListItem className={classes.drawerItem}>
                            <ListItemText>
                                <IoMdCall className="nav_icon"/> CONTACT
                            </ListItemText>
                        </ListItem>
                    </NavLink>
                    
                </List>
                <div id='stars'></div>
                <div id='stars2'></div>
                <div id='stars3'></div>
                </div>
            </Drawer>

            <HrtDialog />
            
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
                <Button onClick={handleThemeToggle} disableRipple disableTouchRipple disableFocusRipple>
                    {theme === 'light'? <Brightness2Icon style={{color: '#003311'}}/> : <WbSunnyIcon style={{color: '#80ffaa'}}/>}
                </Button>
            </div>

        </nav>

        </>
    )
}

export default Navbar
