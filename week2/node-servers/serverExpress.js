// require the express module which we need to install using npm
var express = require('express')

// use the express function to create an 'app' that we will use
var app = express();

var port = 8080

// this app.use will serve up any html file found in the given static path
// we can add new html files to that directory and if the name matches what
// is found on the request url, it will send the contents of that file as 
// the response.
app.use(express.static('./public/html'))

// here we create the server listener which will listen to the specified port
// and handle any requests it receives.
app.listen(port, (err) =>{
    if(err) {
        console.log("server error:", err)
    } else {
        console.log("server is up and listening to port "+port)
    }
})