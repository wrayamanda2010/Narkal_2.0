
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('restaurant_options').del()
    .then(function () {
      // Inserts seed entries
      return Promise.all([
        // Inserts seed entries
        knex('restaurant_options').insert([
          {
            id:1,
            restaurant_id: 1,
            options_id: 2
          },
          {
            id:2,
            restaurant_id: 1,
            options_id: 3
          },
          {
            id:3,
            restaurant_id: 1,
            options_id: 5
          },
          {
            id:4,
            restaurant_id: 1,
            options_id: 6
          },
          {
            id:5,
            restaurant_id: 1,
            options_id: 9
          },
          {
            id:6,
            restaurant_id: 1,
            options_id: 13
          },
          {
            id:7,
            restaurant_id: 1,
            options_id: 14
          },
          {
            id:8,
            restaurant_id: 1,
            options_id: 17
          },
          {
            id:9,
            restaurant_id: 1,
            options_id: 19
          },
          {
            id:10,
            restaurant_id: 1,
            options_id: 20
          },
          {
            id:11,
            restaurant_id: 1,
            options_id: 24
          },
          {
            id:12,
            restaurant_id: 1,
            options_id: 32
          },
          {
            id:13,
            restaurant_id: 1,
            options_id: 46
          },
          {
            id:14,
            restaurant_id: 1,
            options_id: 47
          },
          {
            id:15,
            restaurant_id: 1,
            options_id: 49
          },
          {
            id:16,
            restaurant_id: 1,
            options_id: 59
          },
          {
            id:17,
            restaurant_id: 1,
            options_id: 60
          },
          {
            id:18,
            restaurant_id: 1,
            options_id: 61
          },
          {
            id:19,
            restaurant_id: 1,
            options_id: 62
          },
          {
            id:20,
            restaurant_id: 1,
            options_id: 63
          },
          {
            id:21,
            restaurant_id: 1,
            options_id: 65
          },
          {
            id:22,
            restaurant_id: 1,
            options_id: 67
          }
        ])
        .then(function() {
          return knex.raw(`SELECT setval('restaurant_options_id_seq', (SELECT MAX(id) FROM restaurant_options));`)
        })
      ]);
    });
};
