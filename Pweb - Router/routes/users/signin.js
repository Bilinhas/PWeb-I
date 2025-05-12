var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.redirect("/users/signup")
  console.log("Página 'signin' acessada em ("+req.requestTime+").")
});

module.exports = router;
