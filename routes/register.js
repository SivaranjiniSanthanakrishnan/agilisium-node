var express = require('express');
var app = express.Router();
var registerModule = require('../modules/registerModule');

app.post('/signup', registerModule.signup);
app.post('/signin', registerModule.signin);

module.exports = app;