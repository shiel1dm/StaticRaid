
import "./App.css";
import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter, Router, Route, Redirect, Switch } from "react-router-dom";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Team from "./pages/Team";
import { useHistory } from "react-router-dom";
import Auth from './utils/auth';

const useStyles = makeStyles(theme => ({
  root: {
  backgroundColor: '#B5B3B4'
  }
}))


// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: "http://localhost:3001/graphql",
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


function App() {
  const history = useHistory();
const classes = useStyles();

  
  return (
    <container className={classes.root}>
    <ApolloProvider client={client}>
      <BrowserRouter>
      <Container maxWidth="xl">
        <Navbar />
        <Team />
        <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route exact path="/login" >
              <Login /> 
            </Route>
            <Route exact path="/signup">
              <Signup />
            </Route>
            <Route exact path="/">
            </Route>
          </Switch>
          <Home />
        </div>
      </div>
      </Container>
      </BrowserRouter>
    </ApolloProvider>
    </container>
    
  );
}

export default App;
