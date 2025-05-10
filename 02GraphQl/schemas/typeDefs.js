const { gql } = require("apollo-server");

const typeDefs = gql`
    """Representa un usuario dentro del sistema."""
    type User {
        """Identificador único del usuario."""
        id: ID!
        """Nombre del usuario."""
        name: String!
        """Correo electrónico del usuario."""
        email: String!
    }
    
    """Consultas disponibles para obtener datos."""
    type Query {
        """Obtiene la lista de todos los usuarios registrados."""
        getUsers: [User]
        """Obtiene los datos de un usuario por su ID."""
        getUser(id: ID!): User
    }

    """Operaciones de modificación sobre los datos."""
    type Mutation {
        """Crea un nuevo usuario con nombre y correo electrónico."""
        createUser(name: String!, email: String!): User
        """Actualiza los datos de un usuario existente por ID."""
        updateUser(id: ID!, name: String!, email: String!): User
        """Elimina un usuario por su ID."""
        deleteUser(id: ID!): User
    }
`;

module.exports = typeDefs;
