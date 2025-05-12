var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:userid', function(req, res, next) {
  res.send("Bem-vindo "+req.params.userid+"!");
  console.log("Página 'users/signin-userid' acessada em ("+req.requestTime+").")
});

module.exports = router;
