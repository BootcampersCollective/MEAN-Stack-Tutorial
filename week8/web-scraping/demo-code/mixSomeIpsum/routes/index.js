var express = require('express');
var router  = express.Router();
var app     = require('../app')
var path    = require('path')


router.get('/', function(req, res){
    res.render('mixsomeipsum')
})


app.use('/', router)
