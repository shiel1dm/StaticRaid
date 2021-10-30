const { gql } = require('apollo-server-express');

const typeDefs = gql
`
  type User {
    _id: ID
    username: String
    email: String
    password: String
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
=======

  type Query {
    users: [User]!
    user(userId: ID!): User
    me: User
  }

  type Mutation {
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
  }
`;

module.exports = typeDefs;


