
exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', function(table) {
        table.string('username').notNullable().primary();
        table.string('firstname').notNullable();
        table.string('email').notNullable();
        table.string('password').notNullable();
        table.boolean('loggedin');
        table.boolean('hasPet');
        table.timestamp('created_at').defaultTo(knex.fn.now());
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('users');
};
