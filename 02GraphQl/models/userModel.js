const users = [
    { id: "1", name: "Juan Perez", email: "juane@example.com" },
    { id: "2", name: "Maria Lopez", email: "maria@example.com" },
];

const getAll = () => users;

const getById = (id) => users.find(u => u.id === id)

const create = (name, email) => {
    // Expresión regular básica para validar formato de correo
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        throw new Error("Correo electrónico inválido.");
    }

    const newUser = {
        id: users.length + 1,
        name: name,
        email
    };

    users.push(newUser);
    return newUser;
};


const update = (id, name, email) => {

    const user = users.find(u => u.id == id)
    if (email !== undefined) {
        // Expresión regular básica para validar formato de correo
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            throw new Error("Correo electrónico inválido.");
        }
        user.email = email;
    }
    if (name !== undefined) user.name = name;
    return user;
}

const remove = (id) => {
    const index = users.findIndex(u => u.id == id)
    if (index === -1) return null;
    return users.splice(index, 1)[0];
}

module.exports = { getAll, getById, create, update, remove };