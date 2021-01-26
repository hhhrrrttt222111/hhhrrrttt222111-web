import React from 'react'
import Education from './Education/Education'
import Skills from './Skills/Skills'

import './Resume.css'

function Resume() {
    return (
        <div className="resume" id="resume">
            <Education />
            <Skills />
        </div>  
    )
}

export default Resume
