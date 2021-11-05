import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
  Container
} from "@material-ui/core";
import { Link } from "react-router-dom";
import Auth from '../../utils/auth';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "black",
  },
  navlinks: {
    marginLeft: theme.spacing(5),
    display: "flex",
  },
 logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(20),
    "&:hover": {
      color: "yellow",
      borderBottom: "1px solid white",
    },
  },
}));

function Navbar() {
  const classes = useStyles();

  async function handleLogout() {
    await Auth.signOut();
  
    userHasAuthenticated(false);
  
    history.push("/login");
  }

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <Toolbar>
          <div classsName={classes.navlinks}>
          <Link to="/schedule" className={classes.link}>
              Scheduler
            </Link>
            <Link to="/" className={classes.link}onClick={() => Auth.logout()}>
              Logout
            </Link>
          </div>
        </Toolbar>
      );
    } else {
      return (
        <Toolbar>
          <div className={classes.navlinks}>
            <Link to="/signup" className={classes.link}>
              Signup
            </Link>
            <Link to="/login" className={classes.link}>
              Login
            </Link>
          </div>
         </Toolbar>
      );
    }
  }


  return (
    <Container className={classes.navigation}>
    <AppBar position="static">
      <CssBaseline />
      <Toolbar>
        <Typography variant="h4" className={classes.logo}>
          Static Raid
        </Typography>
          <div className={classes.navlinks}>
            <Link to="/" className={classes.link}>
              Home
            </Link>
          </div>
          {showNavigation()}
      </Toolbar>
    </AppBar>
    </Container>
  );
}
export default Navbar;