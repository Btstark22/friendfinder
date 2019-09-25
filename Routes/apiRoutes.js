//get route with the URL /api/friends
var express = require('express')
var router = express.Router()

// respond with "hello world" when a GET request is made to the homepage
Router.get('/', function (req, res) {
  res.render('index')
});
//post routes /api/friends