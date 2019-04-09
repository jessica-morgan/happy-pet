const connection = require('./index')

module.exports = {
  getUser
}

function getUser (user, db = connection) {
    return db('users')
      .where({
        username: user.username
      })
      .first()
  }