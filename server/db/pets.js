const connection = require('./index')

module.exports = {
  getPets,
  newPet
}

//gets all pets
function getPets (db = connection) {
  return db('pets')
  .select()
}

//posts new pet to db
function newPet (ownername, pettype, petname, pethabitat, petactivity, db = connection) {
    return db('pets')
    .insert({
        owner: ownername,
        petType: pettype,
        petName: petname,
        habitat: pethabitat,
        activity: petactivity
    })
}
