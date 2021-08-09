const { ApolloServer } = require("apollo-server-express");
const express = require("express");
require("dotenv").config();

async function startApolloServer() {
  const PORT = process.env.PORT;
  const { typeDefs, resolvers } = require("./schemas");
  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();

  const app = express();

  server.applyMiddleware({ app, path: "/" });

  await new Promise((resolve) => app.listen({ port: 3001 }, resolve));
  console.log(`Server ready at http://localhost:3001${server.graphqlPath}`);
  return { server, app };
}

startApolloServer();
