import React from 'react'
import { NavHashLink as NavLink } from 'react-router-hash-link';
import { Button } from '@material-ui/core'
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

import './About.css'


function About() {
    return (
        <section className="about" id="about">
            <div className="about_header">
                <h1>About Me !</h1>
                <h4>My Story</h4>
            </div>
            <div className="aboutBody">
                <div className="about_Left">
                    <div className="bodyTop">
                        <Slide left>
                            <p>                    
                                <span className="hey">Hey folks!</span> <br />
                                I am Hemanth R, a second year student at Govt.Model Engineering college, majoring in Computer Science and Engineering and currently staying in Kochi. It has been my childhood dream to work in the field of computers and contribute to the world of technology. And I fulfill it by spending most of my living breathing hours in front of my laptop.
                            </p>
                        </Slide>
                        <Slide right>
                            <p>                    
                                I have aspired to master in this field and become one of the best software engineers in the world for as long as I can remember. Having gone to great lengths to develop the necessary skills, I am well versed in different computer languages like C, C++, Python, Java etc…
                            </p>
                        </Slide>
                        <div className="line"></div>
                    </div>
                    <div className="bodyBottom">
                        <Slide bottom>
                            <p>                    
                                With this knowledge I have been able to 
                                create various successful projects as well as help others with similar goals achieve  them. I spend much of my free time brushing up on my computer skills by trying new and different things. Apart from this, I am an avid fan of football and cricket and if I am not tinkering about with some code, then you can probably find me playing these games.
                            </p>
                        </Slide>
                    </div>
                </div>
                <div className="aboutRight">
                    <Fade right>
                        <div className="about_img">
                            <div className="ch-info">
                                <p>Hey!</p>
                            </div>
                        </div>
                    </Fade>
                    {/* <img src={temp} alt="" /> */}
                    <NavLink to="/#contact" className="drawerLinks" smooth={true} spy="true" duration={2000}>
                        <Button variant="outlined">Hire me</Button>
                    </NavLink>
                </div>
            </div>
        </section>
    )
}

export default About
