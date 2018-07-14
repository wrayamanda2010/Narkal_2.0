exports.up = function(knex, Promise) {
  return knex.schema.createTable('options', function(table){
    table.increments();
    table.varchar('type', 255).notNullable().defaultTo('');
    table.varchar('name', 255).notNullable().defaultTo('');
    table.dateTime('created_at').notNullable().defaultTo(knex.raw('now()'));
    table.dateTime('updated_at').notNullable().defaultTo(knex.raw('now()'));
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users');
};
