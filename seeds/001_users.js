
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('users').insert([{
          id: 1,
          is_owner: true,
          username: 'threebroomsticksmatron',
          first_name: 'Madam',
          last_name: 'Rosmerta',
          email: 'rosmertabrooms@gmail.com',
          hashed_password: '$2a$12$C9AYYmcLVGYlGoO4vSZTPud9ArJwbGRsJ6TUsNULzR48z8fOnTXbS',  // youreawizard
          facebook: 'https://www.facebook.com/rosmerta.brooms.3',
          instagram: 'https://www.instagram.com/rosmertabrooms/',
          twitter: 'https://twitter.com/rosmertabrooms.3'
        }])
        .then(function() {
          return knex.raw(`SELECT setval('users_id_seq', (SELECT MAX(id) FROM users));`)
        })
      ]);
    });
};
