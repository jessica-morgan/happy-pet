import request from 'superagent'

const url = 'http://localhost:3000/api/v1/users'

//gets all users
export function getUsersApi() {
    return request
      .get(url)
      .then(res => res.body)
      .catch(err => {
        if (err) throw Error('Cannot get users')
      })
  }

  //gets pet by owners username
  export function getUsersPetApi() {
      return request
      .get(`${url}/userspet`)
      .then(res => res.body)
      .catch(err => {
          if (err) throw Error('Cannot get pet')
      })
  }