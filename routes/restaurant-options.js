const express = require('express');
const router = express.Router();
const knex = require('../knex');

router.get('/', (req, res, next) => {
  knex('options')
    .select('*')
    .then((info) => {
      // console.log(info)
      res.render('restaurant-options', {
        title: 'Restaurant Options',
        info
      })
    })
    .catch((err) => `Restaurant sign in error --> ${err}`)
})

module.exports = router;
