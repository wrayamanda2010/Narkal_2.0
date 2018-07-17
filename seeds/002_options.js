
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('options').del()
    .then(function () {
      // Inserts seed entries
      return Promise.all([
        knex('options').insert([{
          id: 1,
          type: 'Specialties',
          name: 'Pizza'
        },
        {
          id: 2,
          type: 'Specialties',
          name: 'Burgers'
        },
        {
          id: 3,
          type: 'Specialties',
          name: 'Breakfast/Brunch'
        },
        {
          id: 4,
          type: 'Specialties',
          name: 'Icecream'
        },
        {
          id: 5,
          type: 'Specialties',
          name: 'Juice/Smoothies'
        },
        {
          id: 6,
          type: 'Specialties',
          name: 'Kombucha'
        },
        {
          id: 7,
          type: 'Specialties',
          name: 'Salad Bar/Buffet'
        },
        {
          id: 8,
          type: 'Specialties',
          name: 'Happy Hour'
        },
        {
          id: 9,
          type: 'Specialties',
          name: 'Coffee'
        },
        {
          id: 10,
          type: 'Specialties',
          name: 'Steakhouse'
        },
        {
          id: 11,
          type: 'Specialties',
          name: 'Sushi'
        },
        {
          id: 12,
          type: 'Specialties',
          name: 'Sandwiches'
        },
        {
          id: 13,
          type: 'Food Allergies',
          name: 'Soy'
        },
        {
          id: 14,
          type: 'Food Allergies',
          name: 'Dairy'
        },
        {
          id: 15,
          type: 'Food Allergies',
          name: 'Peanuts'
        },
        {
          id: 16,
          type: 'Food Allergies',
          name: 'Tree Nuts'
        },
        {
          id: 17,
          type: 'Food Allergies',
          name: 'Gluten'
        },
        {
          id: 18,
          type: 'Food Allergies',
          name: 'Seafood'
        },
        {
          id: 19,
          type: 'Dietary',
          name: '100% Farm to Table'
        },
        {
          id: 20,
          type: 'Dietary',
          name: 'Farm to Table Focused'
        },
        {
          id: 21,
          type: 'Dietary',
          name: '100% Vegan'
        },
        {
          id: 22,
          type: 'Dietary',
          name: 'Vegan Options'
        },
        {
          id: 23,
          type: 'Dietary',
          name: '100% Vegitarian'
        },
        {
          id: 24,
          type: 'Dietary',
          name: 'Vegitarian Options'
        },
        {
          id: 25,
          type: 'Dietary',
          name: '100% Organic'
        },
        {
          id: 26,
          type: 'Dietary',
          name: 'Organic Options'
        },
        {
          id: 27,
          type: 'Dietary',
          name: 'Gluten Free Menu'
        },
        {
          id: 28,
          type: 'Dietary',
          name: 'Paleo Menu'
        },
        {
          id: 29,
          type: 'Dietary',
          name: 'Kosher'
        },
        {
          id: 30,
          type: 'Dietary',
          name: 'Grass Fed Meat'
        },
        {
          id: 31,
          type: 'Dietary',
          name: 'Locally Sourced Meat'
        },
        {
          id: 32,
          type: 'Dietary',
          name: 'Hormone Free Meat'
        },
        {
          id: 33,
          type: 'Dietary',
          name: 'Serve Alcohol'
        },
        {
          id: 34,
          type: 'Dietary',
          name: 'Bring Your Own Alcohol'
        },
        {
          id: 35,
          type: 'Food Type',
          name: 'Chinese'
        },
        {
          id: 36,
          type: 'Food Type',
          name: 'Japanese'
        },
        {
          id: 37,
          type: 'Food Type',
          name: 'Thai'
        },
        {
          id: 38,
          type: 'Food Type',
          name: 'Indian'
        },
        {
          id: 39,
          type: 'Food Type',
          name: 'Vietnamese'
        },
        {
          id: 40,
          type: 'Food Type',
          name: 'Italian'
        },
        {
          id: 41,
          type: 'Food Type',
          name: 'Mexican'
        },
        {
          id: 42,
          type: 'Food Type',
          name: 'latin American'
        },
        {
          id: 43,
          type: 'Food Type',
          name: 'Greek'
        },
        {
          id: 44,
          type: 'Food Type',
          name: 'Mediterranean'
        },
        {
          id: 45,
          type: 'Food Type',
          name: 'Middle Eastern'
        },
        {
          id: 46,
          type: 'Food Type',
          name: 'American'
        },
        {
          id: 47,
          type: 'Restaurant Type',
          name: 'Counter Service'
        },
        {
          id: 48,
          type: 'Restaurant Type',
          name: 'Sit Down'
        },
        {
          id: 49,
          type: 'Restaurant Type',
          name: 'Cafe'
        },
        {
          id: 50,
          type: 'Restaurant Type',
          name: 'Food Truck'
        },
        {
          id: 51,
          type: 'Restaurant Type',
          name: 'Brewery'
        },
        {
          id: 52,
          type: 'Restaurant Type',
          name: 'Vineyard'
        },
        {
          id: 53,
          type: 'Restaurant Type',
          name: 'CSA'
        },
        {
          id: 54,
          type: 'Restaurant Type',
          name: 'Farmers Market'
        },
        {
          id: 55,
          type: 'Restaurant Type',
          name: 'Health Food Grocery'
        },
        {
          id: 56,
          type: 'Restaurant Type',
          name: 'Fruit/Vegetable Stand'
        },
        {
          id: 57,
          type: 'Restaurant Type',
          name: 'Pet Food'
        },
        {
          id: 58,
          type: 'Restaurant Type',
          name: 'Tobacco/Dispensary'
        },
        {
          id: 59,
          type: 'Culture/Convenience',
          name: 'Handicap Access'
        },
        {
          id: 60,
          type: 'Culture/Convenience',
          name: 'Kid Friendly'
        },
        {
          id: 61,
          type: 'Culture/Convenience',
          name: 'Pet Friendly'
        },
        {
          id: 62,
          type: 'Culture/Convenience',
          name: 'Large Party Access'
        },
        {
          id: 63,
          type: 'Culture/Convenience',
          name: 'Gender Neutral Restrooms'
        },
        {
          id: 64,
          type: 'Culture/Convenience',
          name: 'Reservations Available'
        },
        {
          id: 65,
          type: 'Culture/Convenience',
          name: 'Wifi Access'
        },
        {
          id: 66,
          type: 'Culture/Convenience',
          name: 'Bar Area'
        },
        {
          id: 67,
          type: 'Culture/Convenience',
          name: 'Patio/Outdoor Seating'
        },
        {
          id: 68,
          type: 'Culture/Convenience',
          name: 'Firepits/Fireplaces'
        },
    ])
        .then(function(){
          return knex.raw(`SELECT setval('options_id_seq', (SELECT MAX(id) FROM options));`)
        })
      ])
    });
};
