import React, { useState } from 'react';
import { LOGIN_USER } from '../../utils/mutations';
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


const theme = createTheme();

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }


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
          <Box component="form"sx={{ mt: 3 }}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                        <FormControl required fullWidth margin="normal">
                        <TextField
                        required
                        fullWidth
                        id="username"
                        label="Username"
                        name="username"
                        >
                        <Input
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                      </TextField>
                        </FormControl>
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
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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
              Login
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to={"/Signup"} variant="body2">{Signup}
                  New user? Sign Up here.
                </Link>
              </Grid>
            </Grid>
              </Box>
              </Box>
              </Container>
              </ThemeProvider>
            );
            }
          

        