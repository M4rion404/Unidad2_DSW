const { gql }  = require("apollo-server");

const typeDefs = gql`
    """Madre mia esto es un comentario"""
    type User {
        id: ID!
        name: String!
        email: String!
    }

    """Devuelve todos los usuarios del sistema"""
    type Query {
    """Observando si hay descripción y en donde aparece"""
        getUsers: [User]
        getUser(id: ID!): User
    }

    type Mutation {
        """Crea un nuevo usuario y valida el formato del correo electrónico"""
        createUser(name: String!, email: String!): User
        """Actualiza un usuario existente y valida el formato del correo electrónico"""
        updateUser(id: ID!, name: String, email: String): User
        deleteUser(id: ID!): User
    }
`;

module.exports = typeDefs;