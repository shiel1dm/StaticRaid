import React from 'react'
import '../../src/App.css'
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, Box } from "@material-ui/core";
import Typed from "react-typed"

const useStyles = makeStyles(theme => ({
    title: {
        color: '#B5B3B4'
    },
    subtitle: {
        color: '#E4E5E9',
        marginBottom: '5rem',
    },
    typedContainer: {
        position: 'absolute',
        top: '60%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
        zIndex: 1,
    }
}))


function About() {
    const classes = useStyles();
    return (
     <Box className={classes.typedContainer}>
            <Typography className={classes.title} variant="h4">
                <Typed strings={["Welcome to Static Raid!"]} typeSpeed={40}/>
            </Typography>
        <br />
        <Typography className={classes.subtitle} variant="h4">
                <Typed strings={["Game Scheduler", "Team Builder"]} typeSpeed={40}
                backSpeed={60}
                loop />
            </Typography>
            <Typography className={classes.text}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis perspiciatis numquam pariatur tenetur aliquam impedit, incidunt obcaecati dicta nam ullam! 
            </Typography>
    </Box>
        
    )
}

export default About;
