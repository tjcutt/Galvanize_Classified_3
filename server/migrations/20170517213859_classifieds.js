
exports.up = function(knex, Promise) {
  return knex.schema.createTable('classifieds', table => {
    table.increments();
    table.string('title').notNullable();
    table.string('description').notNullable();
    table.decimal('price').notNullable();
    table.string('item_image').notNullable();
    table.dateTime("created_at").notNullable().defaultTo(knex.fn.now());
    table.dateTime("updated_at").notNullable().defaultTo(knex.fn.now());
  })

};

exports.down = function(knex, Promise) {
return knex.schema.dropTable('classifieds');
};
