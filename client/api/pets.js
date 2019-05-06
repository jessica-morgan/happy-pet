import request from 'superagent'

const url = 'http://localhost:3000/api/v1/pets'

//gets all pets data
export function getPetApi() {
    return request
      .get(`${url}`)
      .then(res => res.body)
      .catch(err => {
        if (err) throw Error('Cannot get pets')
      })
  }

  //posts new pet
  export function newpetApi(username, pettype, petname, pethabitat, petactivity) {
    return request
    .post(`${url}/newpet/${username}`)
    .send({
      owner: username,
      petType: pettype,
      petName: petname,
      habitat: pethabitat,
      activity: petactivity
    })
    .then(res => res.body)
    .catch(err => {
      if (err) throw Error('Cannot create pet')
    })
  }

  //gets pet image by pet type
  export function petImageApi(pettype) {
    return request
    .get(`${url}/petimage/${pettype}`)
    .then(res => {
      console.log(res.body[0].imageUrl)
      //this gives back correct data- for somereason it won't come through in action
      return res.body[0].imageUrl
    })
    .catch(err => {
      if (err) throw Error('Cannot get pet image')
    })
  }

  //posts pets fed status
  export function feedPetApi(username, lastFed) {
    return request
    .post(`${url}/feedpet/${username}`)
    .send({
      last_fed: lastFed,
      fed: true
    })
    .then(res => res.body)
    .catch(err => {
      if (err) throw Error('Cannot feed pet')
    })
  }

  //deletes pet
  export function deletePetApi(username) {
    return request
    .delete(`${url}/deletepet/${username}`)
    .then(res => res.body)
    .catch(err => {
      if (err) throw Error('Cannot delete pet')
    })
  }

  export function updatePetApi(username, petName, activity, habitat) {
    return request
    .put(`${url}/updatepet/${username}`)
    .send({
      petName: petName,
      activity: activity,
      habitat: habitat
    })
    .then(res => res.body)
    .catch(err => {
      if (err) throw Error('Cannot delete pet')
    })
  }

