import Knex from 'knex';

// seeds criam automáticamente instancias na tabela ao rodar a aplicação, é usado quando precisamos que já seja consumido da api ao iniciar a aplicação.
export async function seed(knex: Knex) {
    await knex('users').insert([
        {
            id: 11111,
            name: 'name_exemple',
            email: 'email_exemple',
            password: 'password_exemple',
            image: 'image_exemple',
            games: 'games_exemple',
            characters: 'characters_exemple'
        }
    ]);
};