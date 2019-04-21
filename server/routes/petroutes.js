const express = require('express')
const db = require('../db/pets')
const router = express.Router()

router.use(express.json())

//gets all pets info
router.get('/', (req, res) => {
    db.getPets()
      .then(pets => {
        res.json(pets)
      })
      .catch(err => {
        res.status(500).send(err)
      })
  })

//posts new pet to db
router.post('/newpet/:owner', (req, res) => {
    const ownername = req.params.owner
    const pettype = req.body.petType
    const petname = req.body.petName
    const pethabitat = req.body.habitat
    const petactivity = req.body.activity
    db.newPet(ownername, pettype, petname, pethabitat, petactivity)
    .then(petdata => {
        res.json(petdata)
      })
      .catch(err => {
        res.status(500).send(err)
      })
})

//gets pet image by pet type
router.get('/petimage/:pettype', (req, res) => {
    const petType = req.params.pettype
    db.petImage(petType)
    .then(petimg => {
      res.json(petimg)
    })
  .catch(err => {
    res.status(500).send(err)
  })
})

//posts last fed timestamp and fed status
router.post('/feedpet/:username', (req, res) => {
  const username = req.params.username
  const lastFed = req.body.last_fed
  db.feedPet(username, lastFed)
  .then(fedData => {
    res.json(fedData)
  })
  .catch(err => {
    res.status(500).send(err)
  })
})

module.exports = router