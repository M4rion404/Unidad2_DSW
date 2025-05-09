const users = [
    { id: "1", name: "Juancho Lopez", email: "Juan@example.com" },
    { id: "2", name: "Maria Lopez", email: "Maria@example.com" }
];

const getAll = () => users;
const getById = (id) => users.find(u => u.id === id);

const create = (name, email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        throw new Error("Formato invalido de correo electrónico");
    }

    const newUser = {
        id: (users.length + 1).toString(), /* Convertimos a string para mantener consistencia con los IDs existentes */
        name: name,
        email
    };
    users.push(newUser);
    return newUser;
};

const update = (id, name, email) => {
    const user = users.find(u => u.id == id);
    if (!user) return null;

    if (name !== undefined) user.name = name;

    if (email !== undefined) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            throw new Error("Formato invalido de correo electrónico");
        }
        user.email = email;
    }

    return user;
}

const remove = (id) => {
    const index = users.findIndex(u => u.id == id);
    if (index === -1) return null;
    return users.splice(index, 1)[0]; /* splice elimina el elemento y lo devuelve */
}

module.exports = { getAll, getById, create, update, remove };
/*shift + alt + f = indentación del codigo */