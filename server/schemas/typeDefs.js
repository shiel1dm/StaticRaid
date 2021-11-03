const { gql } = require('apollo-server-express');

const typeDefs = gql
`
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
    grouptype: String
  }

  type Auth {
    token: ID!
    user: User
  }
<<<<<<< HEAD

  type Query {
    users: [User]
    user(username: String!): User
<<<<<<< HEAD
    me: User
  }
=======

  type Query {
    users: [User]!
    user(userId: ID!): User
=======
>>>>>>> main
    me: User
    team(username: String): [Team]
  }

  type Mutation {
<<<<<<< HEAD
    addUser(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth

    addTeam(nameId: ID!, teamname: String!, grouptype: String!): User
    removeTeam(teamname: String!): Profile
  }
  `;
>>>>>>> login/navbar_component

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
=======
    addUser(username: String!, email: String!, password: String!): Auth
    login(username: String!, password: String!): Auth
    addTeam(teamname: String!): Team
    removeTeam(teamname: String!): Team
>>>>>>> main
  }
`;

module.exports = typeDefs;


