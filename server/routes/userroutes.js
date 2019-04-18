const express = require('express')
const db = require('../db/users')
const router = express.Router()

router.use(express.json())

//posts new user to databse
router.post('/newuser', (req, res) => {
    const username = req.body.username
    const firstname = req.body.firstname
    const email = req.body.email
    const password = req.body.password
    db.newUser(username, firstname, email, password) 
    .then(user => {
        res.json(user)
    })
    .catch(err => {
        res.status(500).send(err)
    })
})

//gets all users
router.get('/', (req, res) => {
    db.getUsers()
      .then(users => {
        res.json(users)
      })
      .catch(err => {
        res.status(500).send(err)
      })
  })

  //get single user 
router.get('/:username', (req, res) => {
    const username = req.params.username
    db.getUser(username)
    .then(user => {
        res.json(user)
    })
    .catch(err => {
        res.status(500).send(err)
    })
})

//gets users pets by their username
router.get('/userspet/:username', (req, res) => {
    const username = req.params.username
    db.getUsersPet(username)
    .then(pet => {
        res.json(pet)
     })
      .catch(err => {
        res.status(500).send(err)
    })
})

//route hit only if username and password match 
router.get('/loggedin/:username', (req, res) => {
    const username = req.params.username
    db.loggedIn(username)
    .then(login => {
        res.json(login)
     })
     .catch(err => {
        res.status(500).send(err)
    })
})

//logs user out
router.get('/logout/:username', (req, res) => {
    const username = req.params.username
    db.logout(username)
    .then(loggedout => {
        res.json(loggedout)
     })
     .catch(err => {
        res.status(500).send(err)
    })
})



module.exports = router