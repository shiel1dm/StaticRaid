import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {  Container, Box } from '@material-ui/core';
import { createTheme, ThemeProvider, Grid, TextField } from '@mui/material';
import Typography from '@mui/material/Typography';
import { FormControl, Button } from "@material-ui/core";
import GroupsRoundedIcon from '@mui/icons-material/GroupsSharp';
import { ADD_TEAM } from '../utils/mutations';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';


const Team = () => {
  const theme = createTheme();
  const[newTeam, setNewTeam] = useState('');
  const [formState, setFormState] = useState({
    teamname: '',
    gamename: '',
  });

  const [addTeam, { error, data }] = useMutation(ADD_TEAM);

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
    setNewTeam('');


  } catch (e) {
    console.error(e);
  }

  };

  return (
    <ThemeProvider theme={theme}>
        <Container>
            <Box
            sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
            >
              <GroupsRoundedIcon sx={{ fontSize:40, bgcolor: 'secondary.main' }}>
              </GroupsRoundedIcon>
              <Typography component="h1" variante="h5">
                Create A Team!
              </Typography>
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
    </ThemeProvider>
  )
} 

export default Team;