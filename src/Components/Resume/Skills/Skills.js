import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

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


function Skills() {
    return (
        <div className="skills">
            <h2>Skills</h2> 

            <div className="skills_container">
                <div className="skills_left">
                    <div className="skill_box">
                        <BorderLinearProgress variant="determinate" value={95} color="red"/>
                        <div className="skill_footer">
                            <h3>HTML/CSS/JS</h3>
                            <h3>95%</h3>
                        </div>
                    </div>
                    <div className="skill_box">
                        <BorderLinearProgress variant="determinate" value={90} color="blue"/>
                            <div className="skill_footer">
                            <h3>React JS</h3>
                            <h3>95%</h3>
                        </div>
                    </div>
                    <div className="skill_box">
                        <BorderLinearProgress variant="determinate" value={80} color="red"/>
                            <div className="skill_footer">
                            <h3>Flutter</h3>
                            <h3>95%</h3>
                        </div>
                    </div>
                    <div className="skill_box">
                        <BorderLinearProgress variant="determinate" value={78} color="black"/>
                            <div className="skill_footer">
                            <h3>Firebase</h3>
                            <h3>95%</h3>
                        </div>
                    </div>
                </div>
                <div className="skills_right">
                    <div className="skill_box">
                        <BorderLinearProgress variant="determinate" value={88} color="green"/>
                            <div className="skill_footer">
                            <h3>Python</h3>
                            <h3>95%</h3>
                        </div>
                    </div>
                    <div className="skill_box">
                        <BorderLinearProgress variant="determinate" value={70} color="yellow"/>
                            <div className="skill_footer">
                            <h3>Django/Flask</h3>
                            <h3>95%</h3>
                        </div>
                    </div>
                    <div className="skill_box">
                        <BorderLinearProgress variant="determinate" value={85} color="pink"/>
                            <div className="skill_footer">
                            <h3>C/C++</h3>
                            <h3>95%</h3>
                        </div>
                    </div>
                    <div className="skill_box">
                        <BorderLinearProgress variant="determinate" value={92} color="orange"/>
                            <div className="skill_footer">
                            <h3>Java</h3>
                            <h3>95%</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills
