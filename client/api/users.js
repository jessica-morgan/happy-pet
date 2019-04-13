import request from 'superagent'

const url = 'http://localhost:3000/api/v1/users'

//posts new user
//new user is added to database 
export function newUserApi(newusername, userfirstname, useremail, userpassword) { 
    return request
    .post(`${url}/newuser`)
    .send({
            username: newusername,
            firstname: userfirstname, 
            email: useremail, 
            password: userpassword
        })
    .then(res => res.body)
    .catch(err => {
      if (err) throw Error('Cannot create user')
    })
}

//gets a single user by username
export function getUserApi(username) {
    return request
    .get(`${url}/${username}`)
    .then(res => res.body)
    .catch(err => {
        if (err) throw Error('Cannot get user')
      })
}

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
  export function getUsersPetApi(username) {
      return request
      .get(`${url}/userspet/${username}`)
      .then(res => res.body)
      .catch(err => {
          if (err) throw Error('Cannot get pet')
      })
  }

  export function loggedInApi(username) {
      return request
      .get(`${url}/loggedin/${username}`)
      .then(res => res.body)
      .catch(err => {
        if (err) throw Error('Cannot get pet')
    })
  }