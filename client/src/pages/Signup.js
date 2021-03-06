import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { FormControl, Button } from "@material-ui/core";
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';




const Signup = () => {
  const theme = createTheme();

  const [formState, setFormState] = useState({
    firstname: '',
    lastname: '',
    username: '',
    email: '', 
    password: '' });
  const [addUser, {error, data}] = useMutation(ADD_USER);

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
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };  

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Container>
                {data ? (
                  <p>
                    Success! You may now head{' '}
                    <Link to="/">back to the homepage.</Link>
                  </p>
                  ) : (
                    <Box component="form"sx={{ mt: 3 }} onSubmit={handleSubmit}>
                      <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                          <FormControl required fullWidth margin="normal">
                          <TextField
                            autoComplete="given-name"
                            name="firstname"
                            required
                            fullWidth
                            id="firstname"
                            label="First Name"
                            value={formState.firstname}
                            onChange={handleChange}
                            />
                            </FormControl>
                            
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <FormControl required fullWidth margin="normal">
                          <TextField 
                            required
                            id="lastname"
                            label="Last Name"
                            name="lastname"
                            value={formState.lastname}
                            onChange={handleChange}
                            />
                         
                          </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                        <FormControl required fullWidth margin="normal">
                        <TextField htmlFor="email" 
                          required
                          label="E-mail"
                          name="email"
                          type="email"
                          autoComplete="email"
                          value={formState.email}
                          onChange={handleChange}
                        />            
                      </FormControl>
                      </Grid>
                        <Grid item xs={12}>
                          <TextField
                            required
                            fullWidth
                            id="username"
                            label="Username"
                            name="username"
                          value={formState.username}
                          onChange={handleChange}
                        />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                          value={formState.password}
                          onChange={handleChange}
                        />
                          
                        </Grid>
                      </Grid>
                      <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                      >
                        Sign Up
                      </Button>

                  {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
                  </div>
                        )}
                      <Grid container justifyContent="flex-end">
                        <Grid item>
                          <Link to="/login" variant="body2">
                            Already have an account? Log in
                          </Link>
                        </Grid>
                      </Grid>
                    </Box>
            )}
          </Container>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default Signup;


