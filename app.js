'use strict';

require('dotenv').config(); // require and init
const jwt = require('jsonwebtoken');
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const logger = require('morgan');
const indexRouter = require('./routes/index');
const usersSignUpRouter = require('./routes/user-signup');
const restaurantSignUpRouter = require('./routes/restaurant-signup');
const restaurantInfoRouter = require('./routes/restaurant-info');
const restaurantOptionsRouter = require('./routes/restaurant-options');
const restaurantProfileRouter = require('./routes/restaurant-profile');
const SignInRouter = require('./routes/log-in');


const app = express();

//view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(passport.initialize())
passport.use(new FacebookStrategy(
  {
    clientID: '170539890307175',
    clientSecret: 'eec4a6c13f6fad6b3c9a3cbbf327017d',
    callbackURL: 'https://narkal.herokuapp.com/facebook/callback',
    userAgent: 'Narkal'
  },

  // will be filled in later
  function onSuccessfulLogin(token, refreshToken, profile, done) {
    console.log(profile)
    done(null, { token })
  }
))

app.use(cookieSession({ secret: 'My super secret' }))
app.use(passport.session())

passport.serializeUser((object, done) => {
  done(null, { token: object.token })
})

passport.deserializeUser((object, done) => {
  done(null, object)
})

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/user-signup', usersSignUpRouter);
app.use('/restaurant-signup', restaurantSignUpRouter);
app.use('/restaurant-info', restaurantInfoRouter);
app.use('/restaurant-options', restaurantOptionsRouter);
app.use('/restaurant-profile', restaurantProfileRouter);
app.use('/log-in', SignInRouter);




// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  console.log(err)

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
