import React, { useEffect, useState, Component } from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import About from './About';
import ScheduleCard from '../components/ScheduleCard';
import { Typography } from '@mui/material';



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
        <Typography>
            Static Raid presents to you a Team builder, team scheduler, and raid planner all in one. With Static raid you can schedule the best times for you to play your favorite games and join available teams. Static Raid is your go to for all of your gaming needs. 
            </Typography>
        <CssBaseline />
    </div>
    )
};
