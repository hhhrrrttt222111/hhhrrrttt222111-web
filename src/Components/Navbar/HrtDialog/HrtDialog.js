import React, { useState } from 'react'
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

import ReactMarkdown from 'react-markdown'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {dark} from 'react-syntax-highlighter/dist/esm/styles/prism'

import './HrtDialog.css'


const components = {
    code({node, className, ...props}) {
      const match = /language-(\w+)/.exec(className || '')
      return match
        ? <SyntaxHighlighter language={match[1]} PreTag="div" style={dark} {...props} />
        : <code className={className} {...props} />
    }
  }


const styles = (theme) => ({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: '#2e261f',
    },
  });
  
  const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
      <MuiDialogTitle disableTypography className={classes.root} {...other}>
        <Typography variant="h6" style={{fontWeight: 'bolder', color:' #2e261f'}}>{children}</Typography>
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
  
  
  const markdown = `
  ~~~js
  export default () => ({
    blogUrl: "https://hackzism.blogspot.com/",
    askMeAbout: [
      "Web-Dev", "DS/ML",
      "Cybersecurity"
    ],
    technologies: {
      "Programming languages": [ "C", "C++", "Python", "Java", "Dart", "Ruby"],
      "webdev": [ "HTML", "CSS", "Bootstrap", "Javascript","ReactJS", "Material-UI" ],
      "appdev": [ "Flutter" ],
      "databases": [ "MySQl", "MongoDB", "Sqlite3" ],
      "applications": ["Microsoft Office" ],
      "mathematicsAndStatistics": [ "NumPy", "Pandas", "SciPy" ],
      "machineLearning": [ "scikit-learn", "TensorFlow", "Keras" ],
      "datavisualization": [ "Matplotlib", "Seaborn" ],
      "devOpsTools": [ "Git" ],
      "cloudOps": [ "AWS" ],
      "operatingSystems": [ "Ubuntu", "Kali Linux", "Windows" ],
      "editors": [ "VSCode", "ViM", "Pycharm", "Jupyter Notebook", "Atom", "Notepad++" ]
    },
     Skills: [
      "Leadership", "Team Building", "Decision Making",
      "Problem Solving", "Time Management", "Quick Learner" 
    ],
     Interest: [
      "Technology", "Coding", "Reading",
      "Football", "Music", "Cricket" 
    ]
  });
  
  ~~~
  `

function HrtDialog() {

    const [hrtOpen, setHrtOpen] = useState(false);

    const handleHrtOpen = () => {
      setHrtOpen(true);
    };
    const handleHrtClose = () => {
      setHrtOpen(false);
    };

    return (
        <div className="hrtDialog" >
            <h3 onClick={handleHrtOpen}>@hhhrrrttt222111</h3>


            <Dialog onClose={handleHrtClose} aria-labelledby="title" open={hrtOpen} maxWidth={true}>
                <DialogTitle id="title" onClose={handleHrtClose} style={{backgroundColor: '#bde052'}}>
                    @hhhrrrttt222111
                </DialogTitle>
                <DialogContent dividers style={{backgroundColor: '#bde052'}}>
                <Typography gutterBottom>
                    
                <ReactMarkdown components={components} children={markdown} />


                </Typography>

                </DialogContent>
            </Dialog>
        </div>
    )
}

export default HrtDialog
