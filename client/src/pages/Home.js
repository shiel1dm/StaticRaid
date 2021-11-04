import React, { useEffect, useState, Component } from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Header from '../components/Header'
import About from '../components/About';
import ScheduleCard from '../components/ScheduleCard';
import Teams from '../components/Teams';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
        alighnItems: 'center',
        height: '100vh',
        backgroundColor: '#54648c',
    },
}));


export default function Home() {
const classes = useStyles();
    
return (
    <div className={classes.root}>
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
    </Box>
        <CssBaseline />
        <Header />
        <About />
        <ScheduleCard />
        <Teams />
    </div>
    )
};
