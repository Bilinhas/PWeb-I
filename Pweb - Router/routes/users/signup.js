var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('signup', { title: 'users/signup' });
  console.log("Página 'signup' acessada em ("+req.requestTime+").")
});

module.exports = router;
