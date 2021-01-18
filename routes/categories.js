var express = require('express');
var router = express.Router();
const categories = require('../public/javascripts/object.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send(categories);
});

module.exports = router;
