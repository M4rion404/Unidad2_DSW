const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Tarea {
    id: ID!
    titulo: String!
    completada: Boolean!
  }

  type Query {
    obtenerTareas: [Tarea]
  }

  type Mutation {
    crearTarea(titulo: String!): Tarea
    actualizarTarea(id: ID!, titulo: String, completada: Boolean): Tarea
    eliminarTarea(id: ID!): Boolean
  }
`;

module.exports = typeDefs;
