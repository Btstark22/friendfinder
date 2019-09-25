//get route with the URL /api/friends
var express = require('express')
var router = express.Router()

Router.get('/', function (req, res) {
  res.render('index')
});
//post routes /api/friends