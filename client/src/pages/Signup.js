import React, { useState, Component } from 'react';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { FormControl, Input, InputLabel, Button } from "@material-ui/core";
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Login from './Login';

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations.js';

import Auth from '../utils/auth';




const Signup = () => {
  const theme = createTheme();

  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

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
 

 /*passwordMatch = () => this.state.password === this.state.passwordConfrim;

  showPassword = () => {
    this.setState(prevState => ({ hidePassword: !prevState.hidePassword }));
  };

  isValid = () => {
    if (this.state.email === "") {
      return false;
    }
    return true;
  };
  handleSubmit = e => {
    e.preventDefault();
    if (!this.passwordMatch()) {
      this.setState({
        errorOpen: true,
        error: "Passwords don't match"
      });
    }
    const newUserCredentials = {
      email: this.state.email,
      password: this.state.password,
      passwordConfrim: this.state.passwordConfrim
    };
    console.log("this.props.newUserCredentials", newUserCredentials);
    //dispath to userActions
  };*/

  

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
                            name="firstName"
                            required
                            fullWidth
                            id="firstName"
                            label="First Name"
                            value={formState.firstName}
                            onChange={handleChange}
                            >
                          </TextField>
                          </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <FormControl required fullWidth margin="normal">
                          <TextField
                            required
                            id="lastName"
                            label="Last Name"
                            name="lastName"
                            value={formState.lastName}
                            onChange={handleChange}
                            >
                          </TextField>
                          </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                        <FormControl required fullWidth margin="normal">
                        <TextField htmlFor="email" 
                          required
                          label="E-mail"
                          autoComplete="email"
                          value={formState.email}
                          onChange={handleChange}
                          >
                        </TextField>
                        
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
                            >
                          </TextField>
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
                            >
                          </TextField>
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


