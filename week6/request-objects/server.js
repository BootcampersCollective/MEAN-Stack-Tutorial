var express = require('express'),
    bodyParser = require('body-parser'),
    morgan = require('morgan');

var app = express();

// the same as
// var routes = require('./controllers/index.js')
// routes(app)

// log out basic development level logging information
app.use(morgan('dev'));

app.post('*', bodyParser.json(), bodyParser.urlencoded( {extended:true} ))

app.use(function(req,res,next){
    var requestInfo ={
        method: req.method,
        path: req.path,
        query: req.query,
        params: req.param,
        body: req.body
    }
    console.log(requestInfo)
    next();
})

require('./controllers/index.js')(app)

var PORT = process.env.PORT || 8080

// start the server listening
app.listen(PORT, function (err) {
    // if there was an error starting the server, log it
    if (err) {
        console.log("server failed: ", err)
    } else {
        // otherwise, log that the server is all good
        console.log("server is up and listening to port", PORT)
    }
})