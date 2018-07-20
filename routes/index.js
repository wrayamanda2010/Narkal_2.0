const express = require('express');
const router = express.Router();
const knex = require('../knex');
const passport = require('passport');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Narkal' });
});

router.get('/restaurant-profile', (req, res, next) => {
  res.render('restaurant-profile', { title: 'Welcome, Narkal!'})
})

module.exports = router;
