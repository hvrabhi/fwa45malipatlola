var express = require('express');
const { param } = require('.');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  let params = req.query['inp'];
  let num;
  if(!params) {
    num = Math.random();
  } else {
    num = parseInt(params);
  }
  console.log(num)
  const f1 = Math.log2(num)
  const f2 = Math.cosh(num)
  const f3 = Math.floor(num)
  res.render('bonus', { title: 'Abhilash Reddy Malipatlola', val: num,  f1, f2, f3});

});

module.exports = router;
