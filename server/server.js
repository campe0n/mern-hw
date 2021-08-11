const { ApolloServer } = require("apollo-server-express");
const express = require("express");
require("dotenv").config();
const path = require("path");

const db = require("./config/connection");

async function startApolloServer() {
  const { typeDefs, resolvers } = require("./schemas");
  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();

  const app = express();

  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  if (process.env.NODE_ENV === "production") P;
  app.use(express.static(path.join(__dirname, "../client/build")));

  server.applyMiddleware({ app, path: "/" });

  await new Promise((resolve) => app.listen({ process.env.PORT }, resolve));
  console.log(`Server ready at http://localhost:3001${server.graphqlPath}`);
  return { server, app };
}

db.once("open", () => console.log("connected to mongo"));

startApolloServer();
