import React from 'react'
import { Button } from '@material-ui/core'

import './About.css'

import temp from '../../assets/svg/temp.svg'

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
                        <p>                    
                            Pellentesque posuere. Praesent turpis. Aenean posuere, tortor sed cursu s feugiat, nunc augue blandit nunc, eu 
                            sollicitudin urna dolor sagittis lacus.
                            Pellentesque posuere. Praesent turpis. Aenean posuere, tortor sed cursu s feugiat, nunc augue blandit nunc, eu 
                            sollicitudin urna dolor sagittis lacus.
                        </p>

                        <p>                    
                            Pellentesque posuere. Praesent turpis. Aenean posuere, tortor sed cursu s feugiat, nunc augue blandit nunc, eu 
                            sollicitudin urna dolor sagittis lacus.
                            Pellentesque posuere. Praesent turpis. Aenean posuere, tortor sed cursu s feugiat, nunc augue blandit nunc, eu 
                            sollicitudin urna dolor sagittis lacus.
                        </p>
                        <div className="line"></div>
                    </div>
                    <div className="bodyBottom">
                        <p>                    
                            Pellentesque posuere. Praesent turpis. Aenean posuere, tortor sed cursu s feugiat, nunc augue blandit nunc, eu 
                            sollicitudin urna dolor sagittis lacus.
                            Pellentesque posuere. Praesent turpis. Aenean posuere, tortor sed cursu s feugiat, nunc augue blandit nunc, eu 
                            sollicitudin urna dolor sagittis lacus.
                        </p>
                    </div>
                </div>
                <div className="aboutRight">
                    <div className="about_img">
                        <div class="ch-info">
                            <p>Hey!</p>
                        </div>
                    </div>
                    {/* <img src={temp} alt="" /> */}
                    <Button variant="outlined">Hire me</Button>
                </div>
            </div>
        </section>
    )
}

export default About
