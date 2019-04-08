
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'jess123', firstname: 'Jess', email: 'jess@gmail.com', password: '1234'}
      ]);
    });
};
