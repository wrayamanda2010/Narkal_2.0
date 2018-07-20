exports.up = function(knex, Promise) {
  return knex.schema.createTable('restaurant', function(table){
      table.increments();
      table.integer('users_id').notNullable().references('users.id').onDelete('CASCADE');
      table.varchar('restName').notNullable().defaultTo('');
      table.varchar('email', 255).notNullable().unique();
      table.varchar('hours_operation', 255).notNullable().unique();
      table.varchar('address_one', 255).notNullable().defaultTo('');
      table.varchar('address_two', 255).notNullable().defaultTo('');
      table.varchar('city', 255).notNullable().defaultTo('');
      table.varchar('state', 255).notNullable().defaultTo('');
      table.integer('zip').unsigned();
      table.varchar('counrty', 255).notNullable().defaultTo('');
      table.varchar('phone', 12).notNullable().defaultTo('');
      table.varchar('facebook', 255).notNullable().defaultTo('');
      table.varchar('instagram', 255).notNullable().defaultTo('');
      table.varchar('twitter', 255).notNullable().defaultTo('');
      table.boolean('expense_1').notNullable().defaultTo(false);
      table.boolean('expense_2').notNullable().defaultTo(false);
      table.boolean('expense_3').notNullable().defaultTo(false);
      table.boolean('expense_4').notNullable().defaultTo(false);
      table.dateTime('created_at').notNullable().defaultTo(knex.raw('now()'));
      table.dateTime('updated_at').notNullable().defaultTo(knex.raw('now()'));
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('restaurant');
};
