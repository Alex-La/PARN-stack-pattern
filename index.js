const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const path = require("path");
const config = require("config");

const typeDefs = require("./server/schema");
const resolvers = require("./server/resolvers");

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const app = express();

app.use("/static", express.static(path.join(__dirname, "static")));

if (process.env.NODE_ENV === "production") {
  app.use("/", express.static(path.join(__dirname, "client", "build")));
  app.get("*", (_, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}

server.applyMiddleware({ app });

const PORT = config.get("port");
app.listen({ port: PORT }, () => {
  console.log(
    "🚀 Server ready at",
    `https://localhost:${PORT}${server.graphqlPath}`
  );
});
