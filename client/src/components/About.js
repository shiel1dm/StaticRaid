import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
//import TeamCard from './TeamCard';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh', 
    }
}));

export default function About() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Typography>
                Welcome!
            </Typography>

        </div>
    )
}