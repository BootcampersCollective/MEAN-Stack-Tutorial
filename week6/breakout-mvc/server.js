// import the express node module as a framework to help us
// deal with middleware and routing
var express = require('express'),
    routes = require('./controllers/routes.js')

// the express module comes in as function, so we execute the
// function to create our app.
var app = express();

// We want to effectively pull a large section of code (all our our route handling)
// out of this file to keep this file simple and straightforward.
// this passes our app object to the routes function that we have written
// in controllers/routes.js
routes(app);

// this is the core of our server, listening to a port for requests
// and leaving the rest to express's route handling.
app.listen(8080, function() {
    console.log("server is up on port 8080")
})