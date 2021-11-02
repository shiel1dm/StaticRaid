import React, { useEffect, useState, Component } from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    root: {
        minHeight: '100vh',
        // backgroundImage:url('../assests/home-img.jpeg'),
        backgroundColor : "#BDC3C0",
    }
}));


export default function Home() {
    const classes = useStyles();
    return <div className={classes.root}>
        <CssBaseline />
    </div>
};
