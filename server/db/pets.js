const connection = require('./index')

module.exports = {
  getPets,
  newPet
}

function getPets (db = connection) {
  return db('pets')
  .select()
}

function newPet (ownername, pettype, petname, pethabitat, petactivity, petfed, db = connection) {
    return db('pets')
    .insert({
        owner: ownername,
        petType: pettype,
        petName: petname,
        habitat: pethabitat,
        activity: petactivity,
        fed: petfed
    })
}
