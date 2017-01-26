// SERVER
// var express = require('express');
// var app = express();
var app = require('express')()

// var routes = require('./controllers/routes.js')
// routes(app);
require('./controllers/routes.js')(app)

var PORT = process.env.PORT || 3000
app.listen(PORT, function (err) {
	if (err) {
		console.log('Our MVC Server failed!', err)
	} else {
		console.log('Our MVC Server is up! On PORT:', PORT)
	}
});


