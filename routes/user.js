var express = require('express');
var router = express.Router();

var User=require('../models/user')

/* GET home page. */
    router.get('/signup', function(req, res, next) {
        res.render("user/signup",{title:'Welcome to User page !!'});
    });
    router.post('/signup', function(req, res, next) {
        res.send(req.body)
    });


module.exports = router;
