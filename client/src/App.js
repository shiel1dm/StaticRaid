
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
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import { useHistory } from "react-router-dom";



// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: "/graphql",
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


  async function handleLogout() {
    await Auth.signOut();
  
    userHasAuthenticated(false);
  
    history.push("/login");
  }
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
      <Container maxWidth="xl">
        <Navbar />
        <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route exact path="/" >
              <Login />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/signup">
              <Signup />
            </Route>
          </Switch>
        </div>
      </div>
      </Container>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
