import React, { useState } from 'react';
import { LOGIN_USER } from '../utils/mutations'
import { useMutation } from '@apollo/client';
import { Link, useHistory } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { FormControl, FormControlLabel, FormGroup, Label, Checkbox, Input, InputLabel, Button } from "@material-ui/core";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Signup from './Signup';




const Login = () => {
  const theme = createTheme();
  const [formState, setFormState] = useState({ username: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      username: '',
      password: '',
    });
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
              Login
              </Typography>
              <Container>
                {data ? (
                  <p>
                    Success! You may now head{' '}
                    <Link to="/">back to the homepage.</Link>
                  </p>
                  ) : (
                    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                    <FormControl required fullWidth margin="normal">
                        <Grid item xs={12}>
                             <TextField
                                required
                                fullWidth
                                id="username"
                                label="Username"
                                name="username"
                              >
                                <Input
                                  value={formState.username}
                                  onChange={handleChange}
                                />
                            </TextField>
                            </Grid>
                          </FormControl>
                        
                      <FormControl required fullWidth margin="normal">
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
                                value={formState.password}
                                onChange={handleChange}
                              />
                          </TextField>
                        </Grid>
                      </FormControl>
                        
                        <Button
                          type="submit"
                          fullWidth
                          variant="contained"
                          sx={{ mt: 3, mb: 2 }}
                        >
                          Login
                        </Button>
                        {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
                  </div>
                        )}
                      <Grid container justifyContent="flex-end">
                        <Grid item>
                          <Link to="/signup" variant="body2">
                            New user? Sign up here.
                          </Link>
                        </Grid>
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

export default Login;
          

        