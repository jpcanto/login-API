import express from 'express';
import knex from './database/connection';
import UsersController from './controllers/usersController';

const routes = express.Router();
const usersController = new UsersController();

routes.get('/users', async (request, response) => {
    const users = await knex('users').select('*');
    // knex equivalente á: "SELECT * FROM users" de sql language
    return response.json(users);
});

routes.post('/users', usersController.create);

export default routes;