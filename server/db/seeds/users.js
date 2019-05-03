
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
        username: 'jess123', 
        firstname: 'Jess', 
        email: 'jess@gmail.com', 
        password: '1234', 
        loggedin: false,
        hasPet: true,
        created_at: '2019-04-11 11:05:10'
       },
       {
       username: 'kimmi97', 
        firstname: 'Kimmi', 
        email: 'kimmi@kimmi.com', 
        password: 'password', 
        loggedin: false,
        hasPet: false,
        created_at: '2019-04-30 11:05:10'
       }
      ]);
    });
};
