// server.js

var express = require('express'),
	bodyParser = require('body-parser'),
	app = express(),
	port = process.env.PORT||8080;

// create static route to public files
app.use(express.static(__dirname + '/public'));

// log http requests - instead of declaring a logger function, we call it directly
app.use(require('morgan')('dev'));

// body-parse all post requests using horizontally mounted body-parser middleware
app.post('*', bodyParser.json(), bodyParser.urlencoded({extended:true}));

// Let's make Middleware so we can see our req object info!
app.use(function(req, res, next){

	var requestInfo = {
		method  : req.method, // What kind of request is this? GET, PUT, POST or DELETE
		path    : req.path,   // URL the request is going to
		query   : req.query,  // Info from GET requests
		body    : req.body,   // Info from POST requests
		params  : req.params, // Info from dynamic / paramaterized URLs

		// ip       : req.ip,       // IP address
		// protocol : req.protocol, // HTTP / HTTPS
		// headers  : req.headers,  // Headers from request
		// hostname : req.hostname  // Hostname 
	};

	// console.log(req);
	console.log(requestInfo);
	next(); // Let the middleware chain continue

});

// Require our routes (will look for index.js by default)
// do this after the vertically mounted middleware above.
require('./routes')(app);

var PORT = process.env.PORT || 8080;

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