// require the express module
var express = require('express');
var logger = require('morgan');

// invoke the express() function returned by the require to create our app object
var app = express();

// I want log EVERY request (get, put, post, to this route, to that route)
app.use( logger('dev') )

// let's check some authentication and decide if we are going to continue
// processing this request.
//if the URL contains a query parameter of 'id'  (ie. ?id=1234) then
// we will call next() and continue down the vertically mounted middleware chain
// or whether we send back a rejection message/page.
// app.use( function(req, res, next) {
//     console.log("Request Query:", req.query)
//     if (req.query.id){
//         next();
//     } else {
//         res.send('uh uh.  Not today!')
//     }
// })

app.use( function(req, res, next) {
    console.log('vertical middleware');
    next();
})

// var middleware = function(req, res, next) {

// }

// var loggit = function(req, res, next) {
//     console.log("Method:", req.method)
//     next();
// }

// middleware to check for authentication before allowing it to go any further
app.put('*', function(req, res) {
    console.log("Putting!")
})

// handle the root route by sending a string
app.get('/', function(req, res) {
    res.send('literal string')
    // we can't send two responses to a single request
    //res.sendFile()
})

app.use( express.static('public') );

// app.get('/home', function(req, res) {
//     res.sendFile('/home.html',{root:'./public/'} )
// })

app.get('/', function(req, res) {
    // blah blah blah
    // we can't send two responses to a single request
    //res.sendFile()
})

// here we are GETTING a signup page
// GET is an http request that is intended to retrieve information from the server
// it expects the result to have data (the response)
app.get('/signup', function(req, res) {
    res.send(`
    <form method='POST' action='/signup'>
        <input name='username'>
        <input name='age'>
        <input type='submit' value='Submit'>
        </form>
    `)
})

// here we are POSTING from the signup page
// POST is an http request that is intended to deliver data TO the server
// it expects the request to have a body that contains data
app.post('/signup', function(req, res, next) {
    console.log("Body before:", req.body)
    // res.send();
    next()
})

// body parser is used to convert the request body into a json (and then javascript) object
var bodyParser = require('body-parser');

// this middleware will run that body parser to convert the body into an object
app.use( bodyParser.json(), bodyParser.urlencoded( { extended:true }) );

// in the POST:/signup route, we take the (body-parsed) request body and we 
// can use it as a regular javascript object
app.post('/signup', function(req, res, next) {
    console.log("Body after url unencoding:", req.body)
    console.log("Name", req.body.username)
    // we need to send a response, even if it's empty, to terminate the request
    res.send();
})







// define the port that we will listen to
var PORT = process.env.PORT || 8080;

app.listen(PORT, function(err) {
    if (err) {
        console.log("Server Error:", err)
    } else {
        console.log("Server up on port", PORT)
    }
})