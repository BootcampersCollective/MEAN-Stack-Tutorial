var express = require('express')

var app = express()

app.get('/', function(req, res){
    res.status(418)
    res.send("I'm a teapot")
})

app.listen(3000)
