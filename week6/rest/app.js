var express = require('express')

var app = express()

app.get('/', function(req, res){
    res.status(418)
    console.log(req.headers.cookie)
    //res.set('set-cookie', 'foo=bar&stuff=things')
    res.cookie('foo', 'bar')
    res.cookie('stuff', 'things')
    res.send("I'm a teapot")
})

app.listen(3000)
