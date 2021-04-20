import React, { useState } from 'react'
import { Button, Grid } from '@material-ui/core';

import Fade from 'react-reveal/Fade';

import ProjectCard from './ProjectCard/ProjectCard'

import './Projects.css'
import img1 from '../../assets/svg/img1.svg'
import img2 from '../../assets/svg/img2.svg'
import img3 from '../../assets/svg/img3.svg'
import img4 from '../../assets/svg/img4.svg'
import img5 from '../../assets/svg/img5.svg'
import img6 from '../../assets/svg/img6.svg'
import img7 from '../../assets/svg/img7.svg'
import img8 from '../../assets/svg/img8.svg'

import dialogImg1 from '../../assets/png/img1.png'
import dialogImg2 from '../../assets/png/img2.png'
import dialogImg3 from '../../assets/png/img3.png'
import dialogImg4 from '../../assets/png/img4.png'
import dialogImg5 from '../../assets/png/img5.png'
import dialogImg6 from '../../assets/png/img6.png'
import dialogImg7 from '../../assets/png/img7.png'
import dialogImg8 from '../../assets/png/img8.png'

const projects = [
    {
        id: 1,
        title: 'HandReacting',
        description: 'Are you tired and fed up of the multitude of written assignments that you have to submit? HandReacting is the PERFECT solution to all your problems. It converts typed documents into handwritten ones, saving you a hella lotta time. While you are at it, go ahead and have fun with all the fonts and effects. HandReacting is a project made with React JS For any suggestions or bug reports, visit repo and raise an issue. And yes, you can also thank me for making your life easier by giving a ⭐ for the HandReacting repository.',
        img: img1,
        dialogImg: dialogImg1, 
        framework: 'REACT JS',
        technology: ['REACT JS', 'CSS'],
        github: 'https://github.com/hhhrrrttt222111/handReacting',
        website: 'https://handreacting.web.app/'
    },
    {
        id: 2,
        title: 'Online Fatigue Detector',
        description: 'A Flask app that detects fatigue during online classes. This app would help students stay awake during online classes by monitoring their eye movements. It would trigger an alarm incase the student accidently dozes off during online classes. It would also remind us to have sufficient intake of water from time to time.',
        img: img2,
        dialogImg: dialogImg2, 
        framework: 'FLASK',
        technology: ['HTML', 'CSS', 'JS', 'PYTHON'],
        github: 'https://github.com/hhhrrrttt222111/fatigue-detector',
        // website: 'https://github.com/hhhrrrttt222111'
    },
    {
        id: 3,
        title: 'TravelApp',
        description: 'Travel App created using MERN stack!',
        img: img3,
        dialogImg: dialogImg3, 
        framework: 'MERN',
        technology: ['REACT', 'CSS', 'MONGO DB'],
        github: 'https://github.com/hhhrrrttt222111/TravelApp',
        // website: 'https://github.com/hhhrrrttt222111'
    },
    {
        id: 4,
        title: 'COVID-19 Tracker',
        description: 'COVID-19 Tracker made with ReactJS and Material-UI',
        img: img4,
        dialogImg: dialogImg4, 
        framework: 'REACT JS',
        technology: ['REACT', 'CSS'],
        github: 'https://github.com/hhhrrrttt222111/covid-tracker',
        website: 'https://covid-19-tracker-hrt.web.app/'
    },
    {
        id: 5,
        title: 'Dorkify',
        description: 'Perform Google Dork search with Dorkify',
        img: img5,
        dialogImg: dialogImg5, 
        framework: 'Python',
        technology: ['Python'],
        github: 'https://github.com/hhhrrrttt222111/Dorkify',
        // website: 'https://github.com/hhhrrrttt222111'
    },
    {
        id: 6,
        title: 'PyBox',
        description: 'PyBox provides you with a compilation of many such Python games, serving as a platform to, simply put, have fun. Ranging from pen and paper games like Tic Tac Toe to watered down and modified versions of popular classic arcade games like Snake, Flappy bird and Pong, we have a game for everybody to play.',
        img: img6,
        dialogImg: dialogImg6, 
        framework: 'HTML',
        technology: ['HTML', 'CSS', 'JS'],
        github: 'https://github.com/hhhrrrttt222111/PyBox',
        website: 'https://hhhrrrttt222111.github.io/PyBox/'
    },
    {
        id: 7,
        title: 'Etudia',
        description: 'ETUDIA is small platform that aims at making the studies of KTU 1st year students easy 📚 📋',
        img: img7,
        dialogImg: dialogImg7, 
        framework: 'HTML',
        technology: ['HTML', 'CSS', 'JS'],
        github: 'https://github.com/hhhrrrttt222111/etudia',
        website: 'https://hhhrrrttt222111.github.io/etudia/'
    },
    {
        id: 8,
        title: 'Trapple',
        description: 'Frontend of a Food Delivery website',
        img: img8,
        dialogImg: dialogImg8, 
        framework: 'HTML',
        technology: ['HTML', 'CSS'],
        github: 'https://github.com/hhhrrrttt222111/Trapple',
        website: 'https://hhhrrrttt222111.github.io/Trapple/'
    },
    
]





function Projects() {

    const total = projects.length
    const [cards, setCards] = useState(5)

    const handleLoad = () => {
        setCards(cards === 5 ? total : 5)
    }
    
    return (
        <div className="projects" id="projects">
            <h1>Projects</h1>
            <h4>My Works</h4>
            <Fade bottom>
                <Grid container direction="row" justify="center" alignItems="center" className="projects_container">
                    {projects.slice(0, cards).map(project => (
                        <ProjectCard 
                        img={project.img} 
                        title={project.title} 
                        description={project.description} 
                        framework={project.framework}
                        dialogImg={project.dialogImg}
                        technology={project.technology}
                        github={project.github}
                        website={project.website}
                        />
                    ))}
                </Grid>
            </Fade>
            {cards === 5 ? (
                <Button onClick={handleLoad}>
                    Show More
                </Button>
            ) : (
                <Button onClick={handleLoad}>
                    Show Less
                </Button>
            )}
        </div>
    )
}

export default Projects
