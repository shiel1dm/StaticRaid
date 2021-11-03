const { AuthenticationError } = require('apollo-server-express');
<<<<<<< HEAD
const { User, Thought } = require('../models');
=======
const { User, Team, Schedule } = require('../models');
>>>>>>> main
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },
<<<<<<< HEAD
<<<<<<< HEAD
    user: async (parent, { username }) => {
      return User.findOne({ username });
    },
=======
=======
>>>>>>> main

    user: async (parent, { userId }) => {
      return User.findOne({ _id: userId });
    },

    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError('You must be logged in!')
    }
<<<<<<< HEAD
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
=======
  },


Mutation: {
  addUser: async (parent, { firstName, lastName, username, email, password }) => {
    const user = await User.create({ firstName, lastName, username, email, password });
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

>>>>>>> main
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

<<<<<<< HEAD
module.exports = resolvers;
>>>>>>> login/navbar_component
=======
module.exports = resolvers;
>>>>>>> main
