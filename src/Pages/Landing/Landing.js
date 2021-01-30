import React from 'react'

import { Navbar, Main, About, Resume, Projects, Blog, Contact } from '../../Components'


import './Landing.css'


function Landing({ theme }) {
    
    return (
        <div className="landing">
            <div className="landing_nav">
                <Navbar />
            </div>
            <div className="landing_main">
                <Main />
            </div>
            <div className="landing_about">
                <About />
            </div>
            <div className="landing_resume">
                <Resume theme={theme}/>
            </div>
            <div className="landing_projects">
                <Projects />
            </div>
            <div className="landing_blog">
                <Blog />
            </div>
            <div className="landing_contact">
                <Contact />
            </div>
        </div>
    )
}

export default Landing
