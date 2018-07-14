
exports.up = function(knex, Promise) {
  return knex.schema.createTable('restaurant_options', function(table){
    table.increments();
    table.integer('restaurant_id').notNullable().references('restaurant.id').onDelete('CASCADE');
    table.integer('options_id').notNullable().references('options.id').onDelete('CASCADE');
    table.dateTime('created_at').notNullable().defaultTo(knex.raw('now()'));
    table.dateTime('updated_at').notNullable().defaultTo(knex.raw('now()'));
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('restaurant_options');
};
