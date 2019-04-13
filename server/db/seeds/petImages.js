
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('petImages').del()
    .then(function () {
      // Inserts seed entries
      return knex('petImages').insert([
        {
          petType: 'cat',
          imageUrl: '/images/catpet.png'
        },
        {
          petType: 'dog',
          imageUrl: '/images/dogpet.png'
        },
        {
          petType: 'tiger',
          imageUrl: 'images/tigerpet.png'
        },
        {
          petType: 'giraffe',
          imageUrl: '/images/giraffe.png'
        }
      ]);
    });
};
