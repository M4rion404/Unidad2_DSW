const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schemas/typeDefs.js');
const resolvers = require('./controllers/userController.js');

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
    console.log(`Servidor corriendo en `+url);
});