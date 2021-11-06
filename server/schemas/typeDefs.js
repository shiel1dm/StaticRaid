const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    firstName: String
    lastName: String
    username: String
    email: String
    teams: [Team]!
  }

  type Team {
    team: String
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
    users: [User]!
    user(userId: ID!): User
    me: User
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, username: String!, email: String!, password: String!): Auth
    login(username: String!, password: String!): Auth
    addTeam(teamname: String!, gamename: String!): Team
    removeTeam(teamname: String!): Team
  }
`;

module.exports = typeDefs;


