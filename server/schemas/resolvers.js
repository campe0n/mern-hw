const { User } = require("../models");

const resolvers = {
  Query: {
    users: async () => {
      return await User.find({}).populate("books");
    },
  },
};

module.exports = resolvers;
