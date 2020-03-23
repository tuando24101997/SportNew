var express = require('express');
var router = express.Router();

router.get('/login', (req, res)=>{
  res.render('account/login', {title: "Account - Login"});
});

router.get('/register', (req, res)=>{
  res.render('account/register', {title: "Account - Register"});
});

module.exports = router;
