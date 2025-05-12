var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
  res.render('data', { title: 'data' });
  console.log("Página 'data' acessada em ("+req.requestTime+").")
});

module.exports = router;
