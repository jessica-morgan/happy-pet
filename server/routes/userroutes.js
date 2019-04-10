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

module.exports = router