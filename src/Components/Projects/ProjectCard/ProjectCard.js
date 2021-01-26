import React, { useState } from 'react'
import { Button, Grid } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import GitHubIcon from '@material-ui/icons/GitHub';
import LanguageIcon from '@material-ui/icons/Language';

import './ProjectCard.css'


const styles = (theme) => ({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
  });
  
  const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
      <MuiDialogTitle disableTypography className={classes.root} {...other}>
        <Typography variant="h6">{children}</Typography>
        {onClose ? (
          <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
            <CloseIcon />
          </IconButton>
        ) : null}
      </MuiDialogTitle>
    );
  });
  
  const DialogContent = withStyles((theme) => ({
    root: {
      padding: theme.spacing(2),
    },
  }))(MuiDialogContent);
  
  const DialogActions = withStyles((theme) => ({
    root: {
      margin: 0,
      padding: theme.spacing(1),
    },
  }))(MuiDialogActions);


function ProjectCard({ img, title, description, framework, dialogImg, technology, github, website }) {

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };

    return (
        <Grid className="projectContainer" >
            <img src={img} alt="img" className="proj_image" onClick={handleClickOpen}/>
            <div className="proj_content" onClick={handleClickOpen}>
                <span className="project_framework">{framework}</span>
                <h3 className="project_title">{title}</h3>
                <Button onClick={handleClickOpen}>View Details</Button>
            </div>
            <Dialog onClose={handleClose} aria-labelledby={title} open={open}>
                <DialogTitle id={title} onClose={handleClose}>
                    {title}
                </DialogTitle>
                <DialogContent dividers>
                    <Typography gutterBottom>
                        {description}
                    </Typography>
                    <h2 className="tech_header">Technologies Used:</h2>
                    <div className="techs">
                        {technology && technology.map(tec => (
                            <h4>{tec}</h4>
                        ))}
                    </div>
                    <img src={dialogImg} alt="" className="dialog_img"/>
                </DialogContent>
                <DialogActions>
                    <div className="proj_buttons">
                        <a href={github} target="_blank" rel="noreferrer">
                            <Button startIcon={<GitHubIcon />}>
                                Repo
                            </Button>
                        </a>
                    </div>

                    <div style={{flex: '1 0 0'}} />

                    <div className="proj_buttons">
                        {website && (
                            <a href={website} target="_blank" rel="noreferrer">
                                <Button endIcon={<LanguageIcon />}>
                                    Demo
                                </Button>
                            </a>
                        )}
                    </div>
                </DialogActions>
            </Dialog>
        </Grid>
    )
}

export default ProjectCard
