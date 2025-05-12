var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'root' });
  console.log("Página 'root' acessada em ("+req.requestTime+").")
});

module.exports = router;
