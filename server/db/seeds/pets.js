
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
        created_at: '2019-04-11 14:09:10', 
        updated_at: ''
      }
     ]);
    });
};
