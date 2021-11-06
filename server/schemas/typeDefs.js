const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    firstname: String
    lastname: String
    username: String
    email: String
    teams: [Team]!
    joinedTeams: [Team]
    userSchedule: [Schedule]
  }

  type Team {
    _id: ID
    teamname: String
    gamename: String
    grouptype: String
    teamSize: Int
    teamSchedule: [Schedule]
    users: [User]
  }

  type Schedule {
    title: String
    date: String
    time: String
    users: [User]
    teams: [Team]
  }

  type Auth {
    token: ID!
    user: User
  }
 
  type Query {
    users: [User]
    user(username: String!): User
    me: User
    teams: [Team]
    team(teamname: String!): Team
  }

  type Mutation {
    addUser(firstname: String!, lastname: String!, username: String!, email: String!, password: String!): Auth
    login(username: String!, password: String!): Auth
    addTeam(teamname: String!, gamename: String!): Team
    removeTeam(teamname: String!): Team
    leaveTeam(teamname: String!): Team
    joinTeam(teamname: String!): Team
  }

`;

module.exports = typeDefs;
