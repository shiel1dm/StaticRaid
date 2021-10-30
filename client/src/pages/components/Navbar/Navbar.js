import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import decode from 'jwt-decode';
import { styles } from './styles.js';
import { AppBar, Button, Typography, Toolbar, Avatar, IconButton, Box, FormGroup, FormControlLabel, Menu, MenuItem,  Switch } from '@material-ui/core';
import { AccountCircle} from '@material-ui/icons';

const Navbar = () => {
    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);
   const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
   const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

    
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
        <Box sx={{ flexGrow: 1 }}>
        <FormGroup>
          <FormControlLabel
            control={
              <Switch
                checked={auth}
                onChange={handleChange}
                aria-label="login switch"
              />
            }
            label={auth ? 'Logout' : 'Login'}
          />
        </FormGroup>
        <AppBar>
        <div className = "Navbar" position = "static" color="default">
            <h2>StaticRaid</h2>
        </div>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
                </IconButton>
  
        {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>

              </Menu>
              </div>
        )
            }</Toolbar>
              </AppBar>
              
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
        
               
    
    
        </Box>
    )
}




export default Navbar