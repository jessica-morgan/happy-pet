
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('pets').del()
    .then(function () {
      // Inserts seed entries
      return knex('pets').insert([
      {
        owner: '', 
        petType: '',
        petName: '',
        habitat: '',
        activity: '',
        fed: false,
        created_at: null,
        updated_at: null
      }
      ]);
    });
};
