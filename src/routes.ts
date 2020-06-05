import express from 'express';
import knex from './database/connection';

const routes = express.Router();

routes.get('/users', async (request, response) => {
    const users = await knex('users').select('*');
    // knex equivalente á: "SELECT * FROM users" de sql language
    return response.json(users);
});

export default routes;