import React, { useEffect } from 'react'

import { Navbar, Main, About, Resume, Projects, Blog, Contact } from '../../Components'


import './Landing.css'


function Landing({ theme }) {

    useEffect(() => {
        const cursor = document.querySelector('.cursor');

        document.addEventListener('mousemove', e => {
            cursor.setAttribute("style", "top: "+(e.pageY - 2)+"px; left: "+(e.pageX - 2)+"px;")
        })

    
        document.addEventListener('click', () => {
            cursor.classList.add("expand");
    
            setTimeout(() => {
                cursor.classList.remove("expand");
            }, 100)
        })
    }, [])


    
    return (
        <div className="landing">
            <div className="cursor"></div>
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
