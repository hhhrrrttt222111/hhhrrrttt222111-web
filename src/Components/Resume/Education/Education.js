import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import { GiSchoolBag } from "react-icons/gi";
import { FaSchool } from "react-icons/fa";
import { IoSchoolSharp } from "react-icons/io5";

import './Education.css'

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '22px 26px',
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));



function Education() {

    const classes = useStyles();

    return (
        <div className="education">
            <h2>Education</h2>  

            <div className="education_timeline">
                <Timeline align="alternate">
                    <TimelineItem>
                        <TimelineOppositeContent>
                            <Typography variant="body2" color="textSecondary" style={{marginTop: '1rem'}}>
                                2005 - 2017 
                            </Typography>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot color="primary">
                                <GiSchoolBag className="school_icons"/>
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Paper elevation={3} className={classes.paper}>
                            <Typography variant="h6" component="h1">
                                High Secondary
                            </Typography>
                            <Typography>Bhavans Vidya Mandir, Eroor</Typography>
                            </Paper>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent>
                            <Typography variant="body2" color="textSecondary" style={{marginTop: '1rem'}}>
                                2017 - 2019
                            </Typography>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot color="primary">
                                <FaSchool className="school_icons"/>
                            </TimelineDot>
                        <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                        <Paper elevation={3} className={classes.paper}>
                            <Typography variant="h6" component="h1">
                                High Secondary
                            </Typography>
                            <Typography>Bhavans Vidya Mandir, Eroor</Typography>
                        </Paper>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent>
                            <Typography variant="body2" color="textSecondary" style={{marginTop: '1rem'}}>
                                2019 - 2023
                            </Typography>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot color="primary">
                                <IoSchoolSharp className="school_icons"/>
                            </TimelineDot>
                        </TimelineSeparator>
                        <TimelineContent>
                            <Paper elevation={3} className={classes.paper}>
                                <Typography variant="h6" component="h1">
                                    B.Tech Computer Science
                                </Typography>
                                <Typography>Model Engineering College, Thrikkakara</Typography>
                            </Paper>
                        </TimelineContent>
                    </TimelineItem>
                </Timeline>
            </div>
        </div>
    )
}

export default Education
