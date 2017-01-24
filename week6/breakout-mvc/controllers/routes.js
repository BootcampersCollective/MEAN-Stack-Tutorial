// Routes.js
// is intended to act like a dispatcher and based on the
// route, send the request off to a handler in a different file.

// we need to require the api.js to get the route
// handlers for the routes with a path like /api/*
var API = require('./api.js')

module.exports = function (app) {

    // this will get ALL routes for ALL methods
    // app.use()
    app.get('*', function (req, res, next) {
        console.log('hit our middleware');
        next();
    })

    // we make a simple root route handler that sends back 
    // some plain text to our client
    app.get('/', function (req, res, next) {
        // response.send() just sends back the string which is then
        // interpretted as html by the client.
        res.send("Found our root route")
    })

    // we can send html directly as a string 
    app.get('/home', function (req, res, next) {
        res.send('<h1>We are HOME</h1>')
    })

    // we can send back json data..
    app.get('/data', function (req, res, next) {
        res.json({ name: 'Joe Blow', address: '123 Main St' })
    })


  
    app.get('/api/*', API.checkUserMiddleware)
    app.get('/api/data1', API.getData1)
    app.get('/api/data2', API.getData2)
}