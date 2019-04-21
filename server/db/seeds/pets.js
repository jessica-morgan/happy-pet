
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('pets').del()
    .then(function () {
      // Inserts seed entries
      return knex('pets').insert([
      {
        owner: 'jess123', 
        petType: 'cat',
        petName: 'Fluffy',
        habitat: 'House',
        activity: 'Eating',
        fed: false,
        last_fed: 'Fri Apr 19 2019 14:16:55 GMT+1200 (New Zealand Standard Time)',
        image: '/images/catpet.png',
        petCreatedAt: '2019-04-11 14:09:10'
      }
     ]);
    });
};
