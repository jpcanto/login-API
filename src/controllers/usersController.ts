import { Request, Response } from 'express';
import knex from '../database/connection';

class UsersController {
    async create(request: Request, response: Response) {
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
        const user = {
            name,
            email,
            password,
            image,
            games,
            characters
        };
        await knex('users').insert(user);

        return response.json({ succes: true });
    };
};

export default UsersController;