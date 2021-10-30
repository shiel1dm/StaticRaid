
import './App.css';
import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import Login from './pages/Signup';
import Navbar from './pages/components/Navbar/Navbar';
import Auth from './pages/components/Auth/Auth';
import Home from './pages/Home';


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
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
      <Navbar />
      </div>
   <div>
          <Auth />
          </div>
        <Route path="auth" exact component={() => (!user ? <Auth /> : <Redirect to="/" />)} />
            <Route exact path="/">
              <Login />
            </Route>
 
      </Router>
    </ApolloProvider>
  );
}

export default App;
