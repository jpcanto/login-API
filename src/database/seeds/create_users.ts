import Knex from 'knex';

// seeds criam automáticamente instancias na tabela ao rodar a aplicação, é usado quando precisamos que já seja consumido da api ao iniciar a aplicação.
export async function seed(knex: Knex) {
    knex('users').insert([
        {
            'id': 'id_exemple',
            'name': 'name_exemple',
            'email': 'email_exemple',
            'password': 'password_exemple',
            'image': 'image_exemple',
            'games': 'games_exemple',
            'characters': 'characters_exemple'
        }
    ]);
};