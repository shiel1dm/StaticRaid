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
import { ADD_USER } from '../../utils/mutations.js';

import Auth from '../../utils/auth';


const theme = createTheme();

class Signup extends Component {

  state = {
    email: "",
    password: "",
    passwordConfrim: "",
    hidePassword: true,
    error: null,
    errorOpen: false
  };

  errorClose = e => {
    this.setState({
      errorOpen: false
    });
  };

  handleChange = name => e => {
    this.setState({
      [name]: e.target.value
    });
  };

  passwordMatch = () => this.state.password === this.state.passwordConfrim;

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
  };

  render() {

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
          <Box component="form"sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  >
                  <Input
                disableUnderline={true}
                onChange={this.handleChange("firstName")}
              />
                </TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl required fullWidth margin="normal">
                <TextField
                  required
                  id="lastName"
                  label="Last Name"
                  name="lastName">
                  <Input
                  name="firstName"
                  type="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
              />
                </TextField>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
              <FormControl required fullWidth margin="normal">
              <TextField htmlFor="email" 
                required
                label="E-mail">
                <Input
                name="email"
                type="email"
                autoComplete="email"
                disableUnderline={true}
                onChange={this.handleChange("email")}
              />
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
                  >
                  <Input
                disableUnderline={true}
                onChange={this.handleChange("username")}
              />
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
                  >
                  <Input
                disableUnderline={true}
                onChange={this.handleChange("password")}
              />
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
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to={<Login />} variant="body2">Login
                  Already have an account? Log in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
}

export default Signup;