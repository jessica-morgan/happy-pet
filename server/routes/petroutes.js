const express = require('express')
const db = require('../db/pets')
const router = express.Router()

router.use(express.json())

router.get('/', (req, res) => {
    db.getPets()
      .then(pets => {
        res.json(pets)
      })
      .catch(err => {
        res.status(500).send(err)
      })
  })

module.exports = router