var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', {page:'Home', menuId:'home'});
});

router.get('/', function(req, res, next) {
  res.render('about', {page:'About Us', meuId:'about'});
});

router.get('/', function(req, res, next) {
  res.render('contact', {page:'Contact Us', menuId:'contact'});
});
