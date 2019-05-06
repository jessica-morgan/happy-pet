
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('petImages').del()
    .then(function () {
      // Inserts seed entries
      return knex('petImages').insert([
        {
          petType: 'cat',
          imageUrl: '/images/catPetIcon.png'
        },
        {
          petType: 'mouse',
          imageUrl: '/images/mousePetIcon.png'
        },
        {
          petType: 'monkey',
          imageUrl: 'images/monkeyPetIcon.png'
        },
        {
          petType: 'bunny',
          imageUrl: '/images/bunnyPetIcon.png'
        }
      ]);
    });
};
