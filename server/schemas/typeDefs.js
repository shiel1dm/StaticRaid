const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    teams: [Team]!
  }

  type Team {
    _id: ID
    teamname: String
    gamename: String
    grouptype: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    me: User
    team(username: String): [Team]
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(username: String!, password: String!): Auth
    addTeam(teamname: String!): Team
    removeTeam(teamname: String!): Team
  }
`;

module.exports = typeDefs;


