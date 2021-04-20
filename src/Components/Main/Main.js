import React from 'react'
import TextLoop from "react-text-loop";
import { NavHashLink as NavLink } from 'react-router-hash-link';
import { Button } from '@material-ui/core';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';


import hrt from '../../assets/hrt.jpg'
import HemanthR from '../../assets/HemanthR.pdf'

import './Main.css'

function Main() {
    return (
        <div className="main" id="home">
            <div className="main_left">
                    <img src={hrt} alt="" />
                </div>
                <div className="circle">
                    <img src={hrt} alt="" />
                </div>

                <div className="main_right">
                    <TextLoop springConfig={{ stiffness: 180, damping: 8 }} interval={2000} noWrap={true} mask={true}>
                        <h3>{`< PR0GRAMM3R />`}</h3>
                        <h3>{`{ FR0NTEND DEVEL0PER }`}</h3>
                        <h3>{` HÂÇʞëŘ ;`}</h3>
                    </TextLoop>
                    <p>
                        loremlorem loremloremlor emlorem loremlorem loremlore
                        mloremlorem
                        loremlore mloremloremlorem loremlor  emloremloremloreml
                        oremloreml oremloremlorem
                    </p>
                    <a href={HemanthR} download="Hemanth_CV">
                        <Button size="large" endIcon={<ArrowDownwardIcon />}>
                            Download CV
                        </Button>
                    </a>
                    <div id="section07" className="demo">
                        <NavLink to="/#about" smooth={true} spy="true" duration={4000}>
                            <span></span><span></span><span></span>
                        </NavLink>
                    </div>
                </div>

        </div>
    )
}

export default Main
