import React, { useEffect, useState, Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline, Container } from '@material-ui/core';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Header from '../components/Header'
import About from '../components/About';
import Team from './Team';
import ScheduleCard from '../components/ScheduleCard';



const useStyles = makeStyles((theme) => ({
    root: {
        textAlign: 'center',
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
    },
    header: {
        display: 'block',
    },
    heading: {
        color: "#999D9A",
        fontSize: '5em',
        textAlign: 'center',
    },
}));


export default function Home() {
const classes = useStyles();
    
return (
    <div>
    <Box>
        <div className={classes.root}>
                    <h1 className={classes.heading}>
                        Welcome to 
                        <span className={classes.colorText}> StaticRaid.</span>
                    </h1>
                </div>
    </Box>
                
         
                <Team />
            
     </div>
    )
};
