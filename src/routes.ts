import express from 'express';
import knex from './database/connection';

const routes = express.Router();

routes.get('/users', async (request, response) => {
    const users = await knex('users').select('*');
    // knex equivalente á: "SELECT * FROM users" de sql language
    return response.json(users);
});

routes.post('/users', async (request, response) => {
    // Desestruturação js, modelo de escrita com a(s) variáveis do lado esquerdo da atribuição entre chaves, seria igual a fazer const name = request.body.name
    const {
        name,
        email,
        password,
        image,
        games,
        characters
    } = request.body;
    // Quando o nome da váriavel é igual a key, podemos deixar sem atribuição de valor.
    await knex('users').insert({
        name,
        email,
        password,
        image,
        games,
        characters
    });

    return response.json({ succes: true });
});

export default routes;