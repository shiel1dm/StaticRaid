import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $firstname: String!,
    $lastname: String!,
    $username: String!, 
    $email: String!, 
    $password: String!) 
    {
    addUser(
      firstname: $firstname,
      lastname: $lastname,
      username: $username, 
      email: $email, 
      password: $password) 
      {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_TEAM = gql`
  mutation addTeam($teamname: String!, $gamename: String!) {
    addTeam(teamname: $teamname, gamename: $gamename) {
          teamname
          gamename
    }
  }`
