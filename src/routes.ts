import express from 'express';
import knex from './database/connection';
import UsersController from './controllers/usersController';

const routes = express.Router();
const usersController = new UsersController();

routes.get('/users', usersController.index);
// Request params, usamos :(parametro a ser buscado), é utilizado para retornar apenas 1 instância que satisfaz o parâmetro dentro da tabela
// Nesse caso retornará o usuário que tiver o ID correspondente
routes.get('/users/:id', usersController.show);

routes.post('/users', usersController.create);

export default routes;