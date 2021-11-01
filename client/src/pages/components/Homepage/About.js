import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
//import TeamCard from './TeamCard';
import ScheduleCard from './ScheduleCard';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh', 
    }
}));

export default function About() {
    const classes = useStyles();
    return (
        <div className={classes.root}>

            <ScheduleCard />
        </div>
    )
}