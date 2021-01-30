import React from 'react'
import Education from './Education/Education'
import Skills from './Skills/Skills'

import './Resume.css'

function Resume({ theme }) {
    return (
        <div className="resume" id="resume">
            {/* <Education /> */}
            <Skills theme={theme}/>
        </div>  
    )
}

export default Resume
