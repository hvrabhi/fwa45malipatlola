var express = require('express');
var router = express.Router();

/* GET users listing. */
let value=0
router.get('/', function(req, res, next) {
  res.send(`user accesses are ${value}`);
  value += 1
});

module.exports = router;
