import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center',
        height: '100vh',
    },
    heading: {
        color: "#999D9A",
        fontSize: '5em',
    }
}));

export default function Header() {
    const classes = useStyles();
    return (
        <div className='container' >
            <h1 className={classes.heading}>
                Welcome to 
                <span className={classes.colorText}>StaticRaid.</span>
            </h1>
        </div>
    )
}