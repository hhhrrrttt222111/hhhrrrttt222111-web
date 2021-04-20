import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ModeCommentIcon from '@material-ui/icons/ModeComment';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';

import Fade from 'react-reveal/Fade';

import { FaFacebookF, FaInstagram, FaTwitter, FaGithub, FaLinkedinIn, FaRedditAlien, FaBloggerB } from "react-icons/fa";

import db from '../../firebase';

import './Contact.css'


function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}


function Contact() {

    var yr = new Date().getFullYear();

    var dob = new Date("06/07/2001");  
    var month_diff = Date.now() - dob.getTime();   
    var age_dt = new Date(month_diff);     
    var year = age_dt.getUTCFullYear();  
    var age = Math.abs(year - 1970);  

    const [successMsg, setSuccessMsg] = useState(false);
    const [invalidEmail, setInvalidEmail] = useState(false);
    const [allFields, setAllFields] = useState(false);
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [msg, setMsg] = useState('')

    function validateEmail(id) {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(id);
    }




    const handleInvalidEmailClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setInvalidEmail(false)
    }

    const handleSuccessMsgClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setSuccessMsg(false)
    }

    const handleAllFieldsClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setAllFields(false)
    }

    const sendResponse = (e) => {
        e.preventDefault();

        if (name !== '' && email !== '' && msg !== '') {
            if (validateEmail(email)) {
                db.collection('response').add({
                    name: name,
                    email: email,
                    message: msg
                });
            } else {
                setInvalidEmail(true);
            }


            setName("");
            setEmail("");
            setMsg("")
            setSuccessMsg(true)

        } else {
            setAllFields(true)
        }
    }

    return (
        <div className="contact" id="contact">
            <div className="contact_header">
                <h1>Contacts</h1>
                <h4>Get In Touch</h4>
            </div>
            <div className="contact_body">
                <div className="contact_bodyLeft">
                    <div className="contact_input">
                        <form>
                            <br/>
                            <div className="input_container">
                                <TextField
                                            InputProps={{
                                                        startAdornment: (
                                                            <InputAdornment position="start">
                                                                <AccountCircle className="contact_icons"/>
                                                            </InputAdornment>
                                                        ),
                                                        }} 
                                            value={name} onChange={(e) => setName(e.target.value)}
                                            variant="outlined" fullWidth label="Name" color="secondary" className="name" type="text"/><br/>
                                <TextField InputProps={{
                                                        startAdornment: (
                                                            <InputAdornment position="start">
                                                                <AlternateEmailIcon className="contact_icons"/>
                                                            </InputAdornment>
                                                        ),
                                                        }} 
                                            value={email} onChange={(e) => setEmail(e.target.value)}
                                            variant="outlined" fullWidth label="Email" color="secondary" className="email" type="email" /> <br/>
                                <TextField InputProps={{
                                                        startAdornment: (
                                                            <InputAdornment position="start">
                                                                <ModeCommentIcon className="contact_icons"/>
                                                            </InputAdornment>
                                                        ),
                                                        }} 
                                            value={msg} onChange={(e) => setMsg(e.target.value)}
                                            variant="outlined" fullWidth label="Type Message" multiline rows={4} color="secondary" className="message" type="text" /><br/>

                                <Button onClick={sendResponse}>Send Message</Button>
                            </div>
                            <Snackbar anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} autoHideDuration={3000} open={successMsg} onClose={handleSuccessMsgClose} >
                                <Alert severity="success" onClose={handleSuccessMsgClose}>
                                    Thanks For Dropping By 😁
                                </Alert>
                            </Snackbar>
                            <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'center' }} autoHideDuration={3000} open={allFields} onClose={handleAllFieldsClose} >
                                <Alert severity="info" onClose={handleAllFieldsClose}>
                                    Please enter all the fields 🥵
                                </Alert>
                            </Snackbar>
                            <Snackbar open={invalidEmail} autoHideDuration={3000} onClose={handleInvalidEmailClose} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
                                <Alert severity="error" onClose={handleInvalidEmailClose}>
                                    Please enter a valid email 😅
                                </Alert>
                            </Snackbar>
                            
                        </form>


                    </div>
                    <div className="contact_details">
                        <h2>Hemanth R</h2> <br />
                        <h4><span className="bold-effect">AGE:</span> {age}</h4>
                        <h4><span className="bold-effect">COUNTRY:</span> INDIA</h4>
                        <a href="https://www.google.com/maps/dir//Eroor+South,+Eroor,+Ernakulam,+Kerala+682306/@9.9675995,76.3308084,18.2z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3b0873310a8dd1cb:0xbca42ebb092c8f22!2m2!1d76.3319594!2d9.9684179" target="blank" rel="noopener noreferrer">
                            <h4><span className="bold-effect">ADDRESS</span>: EROOR NORTH, THRIPUNITHURA, ERNAKULAM - 682306</h4>
                        </a>
                        <a href="tel:918281627763">
                            <h4><span className="bold-effect">PHONE:</span> +91 8281627763</h4>
                        </a>
                        <a href="mailto:hemanththanal@gmail.com">
                            <h4><span className="bold-effect">EMAIL:</span> hemanththanal@gmail.com</h4>
                        </a>
                    </div>
                </div>
                <div className="contact_bodyRight">
                    <Fade bottom>
                    <a href="https://www.instagram.com/accounts/login/" target="_blank" rel="noreferrer">
                        <FaInstagram className="footer_icon"/>
                    </a>
                    <a href="https://twitter.com/hhhrrrttt222111" target="_blank" rel="noreferrer">
                        <FaTwitter className="footer_icon"/>
                    </a>
                    <a href="https://www.linkedin.com/in/hhhrrrttt222111/" target="_blank" rel="noreferrer">
                        <FaLinkedinIn className="footer_icon"/>
                    </a>
                    <a href="https://facebook.com/hhhrrrttt222111" target="_blank" rel="noreferrer">
                        <FaFacebookF className="footer_icon"/>
                    </a>
                    <a href="https://github.com/hhhrrrttt222111" target="_blank" rel="noreferrer">
                        <FaGithub className="footer_icon"/>
                    </a>
                    <a href="https://www.reddit.com/user/hhhrrrttt222111" target="_blank" rel="noreferrer" className="d-none">
                        <FaRedditAlien className="footer_icon"/>
                    </a>
                    <a href="https://hackzism.blogspot.com/" target="_blank" rel="noreferrer">
                        <FaBloggerB className="footer_icon"/>
                    </a>
                    </Fade>
                    
                </div>
            </div>
            <div className="contact_footer">
               <h4>Copyright © {yr} | HRT 👾</h4>
            </div>
        </div>
    )
}

export default Contact
