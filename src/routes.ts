import express from 'express';
import knex from './database/connection';
import UsersController from './controllers/usersController';

const routes = express.Router();
const usersController = new UsersController();

routes.get('/users', usersController.index);

routes.post('/users', usersController.create);

export default routes;