var express = require('express')
var app = express()
var router = require('./routes/index.js')

var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/pokejobs', function(err){
    if(err) {
        console.log("DB connection error:", err)
    } else {
        console.log("DB up!")
    }
})

router(app)

app.listen(8079, function(err) {
    if (err) {
        console.log('Server error:', err)
    } else {
        console.log('Server up!')
    }
})