var express = require('express');

// express exports a function, so we invoke that function to create our app object
app = express();

// / is the ROOT ROUTE  (ie. www.mySite.com)
app.get('/', function (request, res) {
    // res.send() will send the text we give it directly
    // it can be html or just plain text
    res.send("<h1> What's up world?</h1>")
})

// /home is a ROUTE (part of the URL).  It will never start with a '.'
app.get('/home', function (request, res) {
    // /home.html is a FILE PATH (where the file exists in the file system)
    // it may be relative to the current directory '.'
    //res.sendFile() will send the specified file down to the client
    res.sendFile('/home.html', { root: './public/' })
})

// Class exercise - add an '/about' route that serves up about.html
app.get('/about', function (request, res) {
    res.sendFile('/about.html', { root: './public/' })
})

// process.env is an object that will grab the specified property 
// (an environment variable) and make it accessible in our node javascript.
// in this case, we can define which port we are listening to without 
// changing it at runtime.
var PORT = process.env.PORT || 8080;

// this is our standard node server listener
app.listen(PORT, function () {
    // handy gut check to make sure that your server is up
    // and which port it is listening to (since it may listen to a
    // different port, based on the environment)
    console.log('Server is up and listening to port', PORT)
})