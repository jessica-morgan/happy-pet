
exports.up = function(knex, Promise) {
    return knex.schema.createTable('pets', function(table) {
    table.string('owner').notNullable().references('username').inTable('users');
    table.string('petType').notNullable().references('petType').inTable('petImages');;
    table.string('petName').notNullable();
    table.string('habitat').notNullable();
    table.string('activity').notNullable();
    table.boolean('fed');
    table.string('last_fed');
    table.string('image')
    table.timestamp('petCreatedAt').defaultTo(knex.fn.now());
 })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('pets');
};
