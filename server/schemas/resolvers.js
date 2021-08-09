const { User } = require("../models");

const resolvers = {
  Query: {
    users: async () => {
      return await User.find({}).populate("books");
    },
  },
  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      return await User.create({ username, email, password });
    },
  },
};

module.exports = resolvers;
