var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('about', { title: 'about' });
  console.log("Página 'about' acessada em ("+req.requestTime+").")
});

module.exports = router;
