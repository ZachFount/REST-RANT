const router = require('express').Router()

const db = require('../models')

router.get('/', (req, res) => {
    db.Place.find()
      .then((places) => {
        res.render('places/index', { places })
      })
      .catch( err => {
        console.log(err)
        res.render('error404')
      })
      })

router.get('/new', (req, res) => {
  res.render('places/new')
})

router.post('/', (req, res) => {
  for (const [key, value] of Object.entries(req.body)) {
    if (!value) delete req.body[key]
  }
    db.Place.create(req.body)
      .then (() => {
        res.redirect('/places')
      })
      .catch(err => {
        console.log('err', err)
        res.render('error404')
      })
  })
  
router.get('/:id', (req, res) => {

    db.Place.findById(req.params.id)
    .then(place => {
      console.log(place)
      res.render('places/show', { place })
    })
    .catch(err => {
      console.log('err', err)
      res.render('error404')
    })
})

module.exports = router