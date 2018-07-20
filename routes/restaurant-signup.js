const express = require('express');
const router = express.Router();
const knex = require('../knex');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

router.get('/', (req, res, next) => {
  knex('users')
    .select('*')
    .then((info) => {
      console.log(info)
      res.render('restaurant-signup', {
        title: 'Restaurant Sign Up',
        info
      })
    })
    .catch((err) => `Restaurant sign in error --> ${err}`)
})


router.post('/', (req, res, next) => {
  const givenPassword = req.body.password;
  bcrypt.hash(givenPassword, 12)
    .then((result) => {
      return knex('users').insert({
        is_owner: req.body.is_owner,
        username: req.body.username,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        hashed_password: result,
        facebook: req.body.facebook,
        instagram: req.body.instagram,
        twitter: req.body.twitter
      }, '*');
    })
    .then((user) => {
      const newObj = {
        id: user[0].id,
        is_owner: user[0].is_owner,
        username: user[0].username,
        first_name: user[0].first_name,
        last_name: user[0].last_name,
        email: user[0].email,
        facebook: user[0].facebook,
        instagram: user[0].instagram,
        twitter: user[0].twitter
      }
      //res.setheaders w jwt
      res.send(newObj);
    })
    .catch((err) => {
      next(err);
    })
})

module.exports = router;
