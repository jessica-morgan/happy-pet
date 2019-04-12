
exports.up = function(knex, Promise) {
    return knex.schema.createTable('pets', function(table) {
    table.string('owner').notNullable().references('username').inTable('users');
    table.string('petType').notNullable();
    table.string('petName').notNullable();
    table.string('habitat').notNullable();
    table.string('activity').notNullable();
    table.boolean('fed');
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
 })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('pets');
};
