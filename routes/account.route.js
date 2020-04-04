var express = require('express');
var router = express.Router();

router.get('/login', (req, res)=>{
  res.render('account/login', {
    title: "Login",
    layout: false
  });
});

router.get('/register', (req, res)=>{
  res.render('account/register', {
    title: "Register",
    layout: false,
  });
});

module.exports = router;
