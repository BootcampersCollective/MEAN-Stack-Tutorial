var express = require('express');
var app = express();

var logger = require('morgan')('dev');
app.use(logger);

// express.static(filePath)  - ./public says look in the directory public located in the current directory
app.use(express.static('./public'))

var MONDAY = process.env.PORT | 8080;
app.server = app.listen(MONDAY, function(err) {
    if (err) {
        console.log("Server Error:", err)
    } else {
        console.log("Server is up on port", MONDAY)
    }
})

var io = require('socket.io');
var serverSocket = io(app.server);

// create a server socket to listen to client connection requests
serverSocket.on('connection', function(socket) {
    console.log("Server socket connected")

    // if we recieve a newNumber socket event, log that number and send
    // a new number back to the same socket connection
    socket.on('newNumber', function(data) {
        console.log(data);
        var newNumber = data *10;
        socket.emit('number', newNumber)
    })
})