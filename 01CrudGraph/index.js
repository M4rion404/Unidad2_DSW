require('dotenv').config();
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const mongoose = require('mongoose');

const typeDefs = require('./graphql/typeDefsSchema');
const resolvers = require('./graphql/resolvers');

const startServer = async () => {
  const app = express();

  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();
  server.applyMiddleware({ app });

  // Conexión a MongoDB
  await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  app.listen({ port: 4000 }, () =>
    console.log(`🚀 Servidor listo en http://localhost:4000${server.graphqlPath}`)
  );
};

startServer();
