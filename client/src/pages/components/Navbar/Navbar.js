import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import decode from 'jwt-decode';
import { styles } from './styles.js';
import { AppBar, Button, Typography, Toolbar, Avatar } from '@material-ui/core';


const Navbar = () => {
    
   const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    
    useEffect(() => {
        
        const logout = () => {
            dispatch({ type: actionType.LOGOUT });
        
            history.push('/auth');
        
            setUser(null);
          };
        
        const token = user?.token;
    
        if (token) {
          const decodedToken = decode(token);
    
          if (decodedToken.exp * 1000 < new Date().getTime()) logout();
        }
        setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);



    return (
        <AppBar>
        <div className = "Navbar" position = "static" color="default">
            <h2>StaticRaid</h2>
        </div>
        <div className = "container">
            <Typography component={Link} to="/" className="heading"></Typography>
            </div>
            <div>
            {user?.result ? (
                    <Toolbar className="profile">
              
                    <Avatar className="userAvatar" alt={user.result.name} src={user.result.img.url}>{user.result.name.charAt(0)}
                    </Avatar>
                    <Typography className="userName" variant="h6">{user?.result.name}</Typography>
                    <Button variant="contained" className="logout">
                        Logout</Button>
                    </Toolbar>
                    ) : ( 
                    <Button component={Link} to="/auth" variant="contained">Sign In
                    </Button>
                    
                )}
                
            </div>
        </AppBar>
    )
}



export default Navbar