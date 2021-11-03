const { gql } = require('apollo-server-express');

const typeDefs = gql
`
  type User {
    _id: ID
    username: String
    email: String
    password: String
<<<<<<< HEAD
=======
    teams: [Team]!
  }

  type Team {
    _id: ID
    teamname: String
    grouptype: String
>>>>>>> 32b2c5d7ead9bc590b570e64cfb234a460989811
  }

  type Auth {
    token: ID!
    user: User
  }
<<<<<<< HEAD

  type Query {
    users: [User]
    user(username: String!): User
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;


=======

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


>>>>>>> 32b2c5d7ead9bc590b570e64cfb234a460989811
