
import './App.css';
import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter, Router, Route, Redirect, Switch } from 'react-router-dom';
import { Container } from '@material-ui/core';
import Signin from './pages/components/Auth/Signin';
import Signup from './pages/components/Auth/Signup';
import Navbar from './pages/components/Navbar/Navbar';
import Home from './pages/components/Homepage/Home';
import Header from './pages/components/Homepage/Header';
import About from './pages/components/Homepage/About';


// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  const user = JSON.parse(localStorage.getItem('profile'));
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
      <Container maxWidth="xl">
        <Navbar />
        <Header />
        <About />
        <Switch>
          <Signin />
          <Route path="/" exact component={Home} />
          <Route path="/auth" exact component={() => (!user ? <Signin /> : <Redirect to="/" />)} />
        </Switch>
        <Home />
      </Container>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
