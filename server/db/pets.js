const connection = require('./index')

module.exports = {
  getPets
}

function getPets (db = connection) {
  return db('pets')
  .select()
}