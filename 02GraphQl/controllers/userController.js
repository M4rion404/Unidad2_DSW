const { db } = require('../firebaseConfig'); // Ruta relativa correcta

const resolvers = {
  Query: {
    getUsers: async () => {
      const snapshot = await db.collection('users').get();
      return snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
    },
    getUser: async (_, { id }) => {
      const doc = await db.collection('users').doc(id).get();
      if (!doc.exists) {
        throw new Error('Usuario no encontrado');
      }
      return { id: doc.id, ...doc.data() };
    }
  },
  Mutation: {
    createUser: async (_, { name, email }) => {
      const newUser = { name, email };
      const docRef = await db.collection('users').add(newUser);
      return { id: docRef.id, ...newUser };
    },
    updateUser: async (_, { id, name, email }) => {
      const userRef = db.collection('users').doc(id);
      await userRef.update({ name, email });
      const updatedDoc = await userRef.get();
      return { id: updatedDoc.id, ...updatedDoc.data() };
    },
    deleteUser: async (_, { id }) => {
      const userRef = db.collection('users').doc(id);
      await userRef.delete();
      return { id };
    }
  }
};

module.exports = resolvers;
