// require express to create the listener and do the routing
var express = require('express');
var app = express();

var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/aliensDB', function(err) {
    if(err) {
        console.log("Database connection error:", err)
    } else {
        console.log("Database connected")
    }
})

// serve up any file in the ./public/html directory
app.use(express.static('./public'))

app.use(function(req, res, next){   
    console.log("Before:",req.body);
    next();
})

var bodyParser = require('body-parser')
app.use(bodyParser.json(), bodyParser.urlencoded({extended:true}))

app.use(function(req, res, next){   
    console.log("After:",req.body);
    next();
})

// Routes
var Routes = require('./routes/alienRouter.js')
Routes(app)

// create the node http server, listening to port 8080
app.listen(8080, function(err) {
    if (err) {
        console.log("Server failed to start:", err)
    } else {
        console.log("Server is up on port 8080")
    }
})