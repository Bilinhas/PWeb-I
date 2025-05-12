var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users', { title: 'users' });
  console.log("Página 'users' acessada em ("+req.requestTime+").")
});

module.exports = router;
