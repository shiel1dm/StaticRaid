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
    _id: ID
    teamName: String
    teamSize: Int
    members: [User]
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
    addUser(firstName: String!, lastName: String!, username: String!, email: String!, password: String!): Auth
    login(username: String!, password: String!): Auth
    addTeam(teamName: String!): Team
    removeTeam(teamName: String!): Team
  }
`;

module.exports = typeDefs;


