import knex from 'knex';
import path from 'path';

const connection = knex({
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'database.sqlite')
    },
});

export default connection;

// (Knex) migrations é o histórico do DB; Permite a montagem de uma tabela em diferentes workspaces.