import React from 'react'
import { Grid, Paper } from '@material-ui/core'

import Fade from 'react-reveal/Fade';

import './Education.css'

function Education() {


    return (
        <div className="education">
            <h2>Education</h2> 
            <h4>Studied At</h4>

            <div className="education_container">
                <Grid container direction="row" justify="center" alignItems="center">
                    <Fade left>
                        <Grid item xs={12} md={6} className="education_item">
                            <Paper elevation={21} className="education_paper">
                                <h5>2005 - 2007</h5>
                                <h3>Bhavans Bala Mandir, Eroor</h3>
                                <h4>Primary Secondary Education</h4>
                            </Paper>
                        </Grid>
                    </Fade>
                    <Fade right>
                        <Grid item xs={12} md={6} className="education_item">
                            <Paper elevation={21} className="education_paper">
                                <h5>2007 - 2019</h5>
                                <h3>Bhavans Vidya Mandir, Eroor</h3>
                                <h4>Higher Secondary Education</h4>
                            </Paper>
                        </Grid>
                    </Fade>
                    <Fade left>
                        <Grid item xs={12} md={6} className="education_item">
                            <Paper elevation={21} className="education_paper">
                                <h5>2019 - Present</h5>
                                <h3>Model Enginnering College, Thrikkakara</h3>
                                <h4>B.Tech in Computer Science</h4>
                            </Paper>
                        </Grid>
                    </Fade>
                </Grid>
            </div> 
            <main className="pacman-container">
                <div className="pacman"></div>
                <div className="path1"></div>
                <div className="path2"></div>
                <div className="path3"></div>
                <div className="path4"></div>
                <div className="path5"></div>
                <div className="path6"></div>
                <div className="path7"></div>
                <div className="path8"></div>
            </main>
        </div>
    )
}

export default Education
