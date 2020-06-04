// Criar tabela
import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('users', table => {
        // increments é um método nativo onde é incrementado automáticamente a cada criação na tabela.
        // primary seta o campo ID como chave primária.
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('password', 10).notNullable();
        table.string('image');
    });
};

// Deletar a tabela
export async function down(knex: Knex) {
    knex.schema.dropTable('users');
}