exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(table){
    table.increments();
    table.boolean('is_owner').notNullable().defaultTo(false);
    table.varchar('username', 255).notNullable().unique();
    table.varchar('first_name', 255).notNullable().defaultTo('');
    table.varchar('last_name', 255).notNullable().defaultTo('');
    table.varchar('email', 255).notNullable().unique();
    table.specificType('hashed_password', 'char(60)').notNullable();
    table.varchar('facebook', 255).notNullable().defaultTo('');
    table.varchar('instagram', 255).notNullable().defaultTo('');
    table.varchar('twitter', 255).notNullable().defaultTo('');
    table.dateTime('created_at').notNullable().defaultTo(knex.raw('now()'));
    table.dateTime('updated_at').notNullable().defaultTo(knex.raw('now()'));
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users');
};
