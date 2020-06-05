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

        return response.json({ ...user });
    };
    async index(request: Request, response: Response) {
        const users = await knex('users').select('*');
        // knex equivalente á: "SELECT * FROM users" de sql language
        return response.json(users);
    };
    async show(request: Request, response: Response) {
        // desestruturação js, sem a desestruturação ficaria const id = request.params.id
        const { id } = request.params;
        const user = await knex('users').where('id', id).first();

        if (!user) return response.status(400).json({ message: 'User not found.' });
        return response.json(user);
    }
};

export default UsersController;