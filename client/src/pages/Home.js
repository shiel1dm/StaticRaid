import React, { useEffect, useState, Component } from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Header from '../components/Header'
import About from '../components/About';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
        alighnItems: 'center',
        height: '100vh',
    },
}));


export default function Home() {
const classes = useStyles();
    
return (
    <div className={classes.root}>
        <CssBaseline />
        <Header />
        <About />
    </div>
    )
};
