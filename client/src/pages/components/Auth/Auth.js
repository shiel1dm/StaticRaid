import React, { useState } from 'react';
import { Button, Box, Grid, Container } from '@material-ui/core';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../../utils/mutations';

import styles from './styles.css';

const Auth = () => {
   
    const [ formState, setFormState ] = useState({
            username: '',
            email: '',
            password: '',
        });
    const [login, { error, data }] = useMutation(LOGIN_USER);


    const handleChange = async(event) => {
        const { username, value } = event.target;
        setFormState({
            ...formState,
            [username]: value,
          });
        };
      
    const handleFormSubmit = async (event) => {
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
        };
      
        return (
        <Box
            component="form"
            sx={{
                display: 'inline',
                alignItems: 'center',
                bgcolor: 'background.paper',
                overflow: 'hidden',
                borderRadius: '12px',
                boxShadow: 1,
                fontWeight: 'bold',
              }}
            noValidate
            autoComplete="off"
          >
            <div className="col-12 col-lg-10">
                <div className={styles.card}>
                    <h4 className={styles.title}>
                <>Login</></h4>
            
                <form className="form" onSubmit={handleFormSubmit}>
                    <Grid container spacing={2}>

                        
                                <input username="email" label="Email Address" handleChange={handleChange} type="email"/>
                                <input username="password" label="password" handleChage={handleChange} type="password"/>
                                
                            
                        
                    </Grid>
                    <Button type="submit" fullwidth variant="contained" className="submit"
                    > Login
                    </Button>
                </form>
                </div>
            </div>
        </Box>
    );
}

export default Auth