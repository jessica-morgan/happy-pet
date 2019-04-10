import request from 'superagent'

const url = 'http://localhost:3000/api/v1/users'

export function getUsersApi() {
    return request
      .get(url)
      .then(res => res.body)
      .catch(err => {
        if (err) throw Error('Cannot get users')
      })
  }