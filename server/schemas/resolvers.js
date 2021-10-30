const { AuthenticationError } = require('apollo-server-express');
const { User, Thought } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },
<<<<<<< HEAD
    user: async (parent, { username }) => {
      return User.findOne({ username });
    },
=======

    user: async (parent, { userId }) => {
      return User.findOne({ _id: userId });
    },

    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError('You must be logged in!')
    }
>>>>>>> login/navbar_component
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

<<<<<<< HEAD
      return { token, user };
    },
    },
  
}

module.exports = resolvers;
=======
    return { token, user };
  },

  addTeam: async (parent, { userId, team }, context) => {
    if (context.user) {
      return User.findOneAndUpdate(
        { _id: userId },
        {
          $addToSet: { teams: team },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    }
    throw new AuthenticationError('You must be logged in!');
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
>>>>>>> login/navbar_component
