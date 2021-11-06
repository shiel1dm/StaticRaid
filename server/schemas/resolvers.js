const { AuthenticationError } = require('apollo-server-express');
const { User, Team, Schedule } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },
    user: async (parent, { userId }) => {
      return User.findOne({ _id: userId });
    },

    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError('You must be logged in!')
    }



  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },

    login: async (parent, { username, password }) => {
      const user = await User.findOne({ username });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

        const correctPw = await user.isCorrectPassword(password);

        if (!correctPw) {
          throw new AuthenticationError('Incorrect credentials');
        }

        const token = signToken(user);

      return { token, user };
    },

    addTeam: async (parent, { userId, teamname, gamename }, context) => {
      if (context.user) {
        const team = await Team.create({ teamname, gamename, creator: userId });
        return team;
        } else {
          throw new AuthenticationError('You must be logged in!');
        }
    },

    removeTeam: async (parent, { team }, context) => {
      if (context.user) {
        return User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { teams: team } },
          { new: true }
        );
      }
      throw new AuthenticationError('You must be logged in!');
    },
  },
};

module.exports = resolvers;

