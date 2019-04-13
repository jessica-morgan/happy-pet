
exports.up = function(knex, Promise) {
    return knex.schema.createTable('petImages', function(table) {
        table.string('petType').notNullable().primary();
        table.string('imageUrl').notNullable();
     })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('petImages');
};
