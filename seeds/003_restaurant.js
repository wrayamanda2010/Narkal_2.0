
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('restaurant').del()
    .then(function () {
      // Inserts seed entries
      return Promise.all([
        // Inserts seed entries
        knex('restaurant').insert([{
          id: 1,
          users_id: 1,
          restName: 'Three Broomsticks',
          email: 'threebrooms@hogmead.com',
          hours_operation: 'Mon-Sun 9-5',
          address_one: '1023 Walnut st',
          address_two: '#1',
          city: 'boulder',
          state: 'CO',
          zip: 80302,
          phone: '303-749-0038',
          facebook: 'https://www.facebook.com/The-Wizarding-World-of-Harry-Potter-483912830511/',
          instagram: 'https://www.instagram.com/explore/locations/828759273/the-wizarding-world-of-harry-potter-at-universal-studios-hollywood/?hl=en',
          twitter: 'https://twitter.com/UniversalORL?lang=en',
          expense_1: false,
          expense_2: true,
          expense_3: false,
          expense_4: false
        }])
        .then(function() {
          return knex.raw(`SELECT setval('restaurant_id_seq', (SELECT MAX(id) FROM restaurant));`)
        })
      ]);
    });
};
