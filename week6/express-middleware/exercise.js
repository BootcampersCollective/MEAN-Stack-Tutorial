var express = require('express')

var app = express()

app.get('*', function(request, response, next) {
    console.log('first middleware')
    next();
})

app.get('/', function(request, response, next) {
    console.log('handle the root route')
    res.send('handled!');
})

app.get('/home', function(request, reponse, next) {
    console.log('handle the home route')
    res.send('home handled!');
    next();  // this will never run
})

// we will never get here because the previous middleware function 
// sent a response to this request.
app.get('/home', function(request, reponse, next) {
    console.log('handle the home route')
    res.send('home handled!');
})