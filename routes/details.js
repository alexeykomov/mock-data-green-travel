var express = require('express');
var router = express.Router();
const details = require('../public/javascripts/details-payload.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send(details);
});

module.exports = router;
