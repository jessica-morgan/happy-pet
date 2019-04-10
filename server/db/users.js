const connection = require('./index')

module.exports = {
  getUsers
}

function getUsers (db = connection) {
    return db('users')
      .select()
  }

