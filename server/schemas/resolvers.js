const { Book, User } = require("../models");

const resolvers = {
  Query: {
    users: async () => {
      return await User.find({}).populate("books");
    },
    books: async () => {
      return await Book.find({});
    },
  },
};

module.exports = resolvers;
