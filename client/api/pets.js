import request from 'superagent'

const url = 'http://localhost:3000/api/v1/pets'

//gets all pets data
export function getPetApi() {
    return request
      .get(url)
      .then(res => res.body)
      .catch(err => {
        if (err) throw Error('Cannot get pets')
      })
  }

  //posts new pet
  export function newpetApi(ownername, pettype, petname, pethabitat, petactivity, petfed) {
    return request
    .post(`${url}/newpet`)
    .send({
      owner: ownername,
      petType: pettype,
      petName: petname,
      habitat: pethabitat,
      activity: petactivity,
      fed: petfed
    })
    .then(res => res.body)
    .catch(err => {
      if (err) throw Error('Cannot create user')
    })
  }
  

