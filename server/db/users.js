const connection = require('./index')

module.exports = {
  newUser,
  getUsers,
  getUsersPet,
  loggedIn,
  getUser,
  logout
}

//inserts new user to database
function newUser (newusername, userfirstname, useremail, userpassword, db = connection) {
  return db('users')
  .insert({
    username: newusername,
    firstname: userfirstname,
    email: useremail,
    password: userpassword
  })
}

//gets a single user from database
function getUser (username, db = connection) {
  return db('users')
  .where('username', username)
  .select()
}

//gets all users
function getUsers (db = connection) {
    return db('users')
      .select()
  }

  //gets pets by username
  function getUsersPet (owner, db = connection) {
    return db('users')
    .join('pets', 'pets.owner', 'username')
    .where('users.username', owner)
    .select('username', 'petType', 'petName', 'habitat', 'activity', 'fed')
  }

//checks for logged in
function loggedIn (username, db = connection) {
  return db('users')
  .where('username', username)
  .update({
    loggedin: true
  })
  .select('username', 'loggedin')
}

//logs user out
function logout (username, db = connection) {
  return db('users')
  .where('username', username)
  .update({
    loggedin: false
  })
  .select('username', 'loggedin')
}
