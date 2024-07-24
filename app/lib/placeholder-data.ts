import bcrypt from "bcrypt";

export const user = {
    id: '1',
    name: 'Itachi',
    email: 'movie.app@gmail.com',
    password:  bcrypt.hash('password', 10),
};  // Utilisateur défini pour l'authentification