const connection = require('./index')

module.exports = {
  getUsers,
  getUsersPet
}

function getUsers (db = connection) {
    return db('users')
      .select()
  }

  function getUsersPet (owner, db = connection) {
    return db('users')
    .join('pets', 'pets.owner', 'username')
    .where('users.username', owner)
    .select('username', 'petName')
  }

  

