const express = require('express')
const db = require('../db/users')
const router = express.Router()

router.use(express.json())

router.get('/', (req, res) => {
    db.getUsers()
      .then(users => {
        res.json(users)
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

module.exports = router