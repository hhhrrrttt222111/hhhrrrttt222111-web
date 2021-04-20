import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

import Fade from 'react-reveal/Fade';

import './Skills.css'

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 13,
    borderRadius: 8,
    backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 300 : 700],
  },
  colorPrimary: {

  },
  bar: {
    borderRadius: 8,
    backgroundColor: props => props.color,
  },
}))(LinearProgress);


function Skills({ theme }) {

    const barColor = theme === 'light'? '#009933' : '#595959'



    return (
        <div className="skills">
            <h2>Skills</h2> 

            <div className="skills_container">
                <div className="skills_left">
                    <Fade bottom>
                        <div className="skill_box">
                            <BorderLinearProgress variant="determinate" value={95} color={barColor}/>
                            <div className="skill_footer">
                                <h3>HTML/CSS/JS</h3>
                                <h3>95%</h3>
                            </div>
                        </div>
                    </Fade>
                    <Fade bottom>
                        <div className="skill_box">
                            <BorderLinearProgress variant="determinate" value={90} color={barColor}/>
                                <div className="skill_footer">
                                <h3>React JS</h3>
                                <h3>90%</h3>
                            </div>
                        </div>
                    </Fade>
                    <Fade bottom>
                        <div className="skill_box">
                            <BorderLinearProgress variant="determinate" value={80} color={barColor}/>
                                <div className="skill_footer">
                                <h3>Flutter</h3>
                                <h3>80%</h3>
                            </div>
                        </div>
                    </Fade>
                    <Fade bottom>
                        <div className="skill_box">
                            <BorderLinearProgress variant="determinate" value={78} color={barColor}/>
                                <div className="skill_footer">
                                <h3>Firebase</h3>
                                <h3>78%</h3>
                            </div>
                        </div>
                    </Fade>
                </div>
                <div className="skills_right">
                    <Fade top>
                        <div className="skill_box">
                            <BorderLinearProgress variant="determinate" value={88} color={barColor}/>
                                <div className="skill_footer">
                                <h3>Python</h3>
                                <h3>88%</h3>
                            </div>
                        </div>
                    </Fade>
                    <Fade top>
                        <div className="skill_box">
                            <BorderLinearProgress variant="determinate" value={70} color={barColor}/>
                                <div className="skill_footer">
                                <h3>Django/Flask</h3>
                                <h3>70%</h3>
                            </div>
                        </div>
                    </Fade>
                    <Fade top>
                        <div className="skill_box">
                            <BorderLinearProgress variant="determinate" value={85} color={barColor}/>
                                <div className="skill_footer">
                                <h3>C/C++</h3>
                                <h3>85%</h3>
                            </div>
                        </div>
                    </Fade>
                    <Fade top>
                        <div className="skill_box">
                            <BorderLinearProgress variant="determinate" value={92} color={barColor}/>
                                <div className="skill_footer">
                                <h3>Java</h3>
                                <h3>92%</h3>
                            </div>
                        </div>
                    </Fade>
                </div>
            </div>
        </div>
    )
}

export default Skills
