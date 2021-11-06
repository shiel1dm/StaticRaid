const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    firstName: String
    lastName: String
    username: String
    email: String
    teams: [Team]!
    joinedTeams: [Team]
    userSchedule: [Schedule]
  }

  type Team {
    _id: ID
    teamName: String
    gamename: String
    grouptype: String
    teamSize: Number
    teamSchedule: [Schedule]
    users: [User]
  }

  type Schedule {
    title: String
    date: Date
    time: String
    users: [User]
    teams: [Team]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]!
    user(userId: ID!): User
    me: User
    teams: [Team]
    team(teamId: ID!): Team
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, username: String!, email: String!, password: String!): Auth
    login(username: String!, password: String!): Auth
    addTeam(teamName: String!, gamename: String!): Team
    leaveTeam(teamName: String!): Team
    joinTeam(teamName: String!): Team
  }
`;

module.exports = typeDefs;