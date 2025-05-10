const Tarea = require('../models/Tarea');

const resolvers = {
  Query: {
    obtenerTareas: async () => await Tarea.find()
  },

  Mutation: {
    crearTarea: async (_, { titulo }) => {
      const nuevaTarea = new Tarea({ titulo });
      return await nuevaTarea.save();
    },

    actualizarTarea: async (_, { id, titulo, completada }) => {
      const tarea = await Tarea.findById(id);
      if (!tarea) throw new Error('Tarea no encontrada');
      if (titulo !== undefined) tarea.titulo = titulo;
      if (completada !== undefined) tarea.completada = completada;
      return await tarea.save();
    },

    eliminarTarea: async (_, { id }) => {
      const result = await Tarea.deleteOne({ _id: id });
      return result.deletedCount > 0;
    }
  }
};

module.exports = resolvers;
