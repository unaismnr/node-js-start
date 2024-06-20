var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {

  const values = ['Abc', 'Bcd', 'Cdf'];

  const person = { name: 'abcde', comments: { comment: 'this is sample comment' } }

  const present = { name: 'bcde', count: false }

  res.render('index', { person });
});

module.exports = router;
