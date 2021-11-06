import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {  Container, Box } from '@material-ui/core';
import { Grid, TextField } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import { FormControl, Button } from "@material-ui/core";
import { ADD_TEAM } from '../utils/mutations';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { QUERY_ME, QUERY_TEAMS } from '../utils/queries';



const useStyles = makeStyles((theme) => ({
  root: {
      display: 'flex',
      justifyContent: 'center',
      textAlign: 'center',

  },
  header: {
    fontSize: '40px',
    color: 'darkblue',
  },
}));

const TeamCreate = () => {
  const classes = useStyles();
  
  const [formState, setFormState] = useState({
    teamname: '',
    gamename: '',
  });
  const [addTeam, { error, data }] = useMutation(ADD_TEAM);

  /*const [addTeam, { error, data }] = useMutation(ADD_TEAM, {
    update(cache, { data: { addTeam }}) {
      try {
      const { teams } = cache.readQuery({ query: QUERY_TEAMS });
      cache.writeQuery({
        query: QUERY_TEAMs,
        data: { teams: [addTeam, ...teams ]},
      });
    } catch (e) {
      console.error(e);
    }
    const { me } = cache.readQuery({ query: QUERY_ME });
    cache.writeQuery({
      query: QUERY_ME,
      data: { me: { ...me, teams: [ ...me.teams, addTeam]}},
    });
    },
  });*/

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

  try {
    const { newTeam } = await addTeam({
      variables: { ...formState },
    })
    console.table(`Your team ${teamname.value} for ${gamename.value} has been created! `)
    console.log(JSON.stringify(data));
    return JSON.stringify(data);
  

    } catch (e) {
      console.error(e);
    }

    };

  return (

        <Container>
            <Box
            sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
            >
        
              <h1 className={classes.header}>
                Create A Team!
              </h1>
              {Auth.loggedIn() ? (
                  <>
                    
                  
                 <Box component="form"sx={{ mt: 3 }} onSubmit={handleSubmit}>
                 <Grid container spacing={2}>
                        <Grid item xs={12} >
                        <FormControl required fullWidth margin="normal">
                          <TextField
                            name="teamname"
                            required
                            fullWidth
                            id="teamname"
                            label="Team Name"
                            value={formState.teamname}
                            onChange={handleChange}
                            />
                            </FormControl>
                            
                        </Grid>
                        <Grid item xs={12} >
                          <FormControl required fullWidth margin="normal">
                          <TextField 
                            required
                            id="gamename"
                            label="gamename"
                            name="gamename"
                            value={formState.gamename}
                            onChange={handleChange}
                            />
                         
                          </FormControl>
                        </Grid>
                      <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                      >
                        Add Team
                      </Button>
                      </Grid>
            {error && (
              <div className="col-12 my-3 bg-danger text-white p-3">
                {error.message}
              </div>
            )}
            
          </Box>
        </>
      ) : (
        <p>
          You need to be logged in to create a Team. Please{' '}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}

                </Box>
         
        </Container>
 
  )
} 

export default TeamCreate;