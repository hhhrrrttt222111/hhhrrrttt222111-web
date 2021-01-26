import React, { useState } from 'react'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ModeCommentIcon from '@material-ui/icons/ModeComment';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import EmailIcon from '@material-ui/icons/Email';
import { FaFacebookF, FaInstagram, FaTwitter, FaGithub, FaLinkedinIn, FaRedditAlien, FaBloggerB } from "react-icons/fa";

import db from '../../firebase';

import './Contact.css'

function Contact() {

    var dob = new Date("06/07/2001");  
    var month_diff = Date.now() - dob.getTime();   
    var age_dt = new Date(month_diff);     
    var year = age_dt.getUTCFullYear();  
    var age = Math.abs(year - 1970);  

    const [open, setOpen] = useState(false);
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [msg, setMsg] = useState('')


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const sendResponse = (e) => {
        e.preventDefault();

        if (name !== '' && email !== '' && msg !== '') {
            db.collection('response').add({
                name: name,
                email: email,
                message: msg
            });

            setName("");
            setEmail("");
            setMsg("")
            setOpen(true);

        } else {
            alert('Fill all the fields')
        }
    }

    return (
        <div className="contact" id="contact">
            <div className="contact_header">
                <h1>Contacts</h1>
                <h3>Get In Touch</h3>
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
                            <Dialog
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="alert-dialog-title"
                                aria-describedby="alert-dialog-description"
                                maxWidth={'xs'}
                            >
                                <DialogContent className="contacts_dialog">
                                <DialogContentText id="alert-dialog-description">
                                    Thanks for dropping by! 
                                </DialogContentText>
                                </DialogContent>
                                <DialogActions>
                                <Button className="dialog_button" onClick={handleClose} color="primary">
                                    Close
                                </Button>
                                </DialogActions>
                            </Dialog>
                            
                        </form>


                    </div>
                    <div className="contact_details">
                        <h2>Hemanth R</h2> <br />
                        <h4>AGE: {age}</h4>
                        <h4>COUNTRY: INDIA</h4>
                        <a href="https://www.google.com/maps/dir//Eroor+South,+Eroor,+Ernakulam,+Kerala+682306/@9.9675995,76.3308084,18.2z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3b0873310a8dd1cb:0xbca42ebb092c8f22!2m2!1d76.3319594!2d9.9684179" target="blank" rel="noopener noreferrer">
                            <h4>ADDRESS: EROOR NORTH, THRIPUNITHURA, ERNAKULAM - 682306</h4>
                        </a>
                        <a href="tel:918281627763">
                            <h4>PHONE: +91 8281627763</h4>
                        </a>
                        <a href="mailto:hemanththanal@gmail.com">
                            <h4>EMAIL: hemanththanal@gmail.com</h4>
                        </a>

                    </div>
                </div>
                <div className="contact_bodyRight">
                    <FaInstagram className="footer_icon"/>
                    <FaTwitter className="footer_icon"/>
                    <FaLinkedinIn className="footer_icon"/>
                    <FaFacebookF className="footer_icon"/>
                    <FaGithub className="footer_icon"/>
                    <FaRedditAlien className="footer_icon"/>
                    <FaBloggerB className="footer_icon"/>
                </div>
            </div>
        </div>
    )
}

export default Contact
