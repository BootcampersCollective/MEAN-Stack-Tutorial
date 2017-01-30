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

// require the basic socket.io node module
var io = require('socket.io');
// call the io() function with the app.server (http listener) object and it will
// return our server socket that will be used to handle all socket communications
var serverSocket = io(app.server);

// require the node-tweet-stream node module to get access to twitter's stream/socket
var nodeTweetStream = require('node-tweet-stream')

// verify that we have all of the required authentication information defined in our environment
if (!(process.env.TWITTER_CONSUMER_KEY || process.env.TWITTER_CONSUMER_SECRET 
    || process.env.TWITTER_TOKEN || process.env.TWITTER_TOKEN_SECRET)) {
        console.log("Twitter Secret, Key, etc. not defined.  Exiting.")
        process.exit(1)
    }

// create a stream (or socket) from twitter, effectively logging in as my twitter user
var twitterStream = nodeTweetStream( {
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret : process.env.TWITTER_CONSUMER_SECRET,
    token : process.env.TWITTER_TOKEN,
    token_secret : process.env.TWITTER_TOKEN_SECRET
})

// Twitter's library allows you to track individual terms on the stream
twitterStream.track('virtual reality')

// create a server socket to listen to client connection requests
serverSocket.on('connection', function(socket) {
    console.log("Server socket connected")

    ///////////////////////////
    // Simple Number Exchange Example
    ///////////////////////////
    // if we recieve a newNumber socket event, log that number and send
    // a new number back to the same socket connection
    // socket.on('newNumber', function(data) {
    //     console.log(data);
    //     var newNumber = data *10;
    //     socket.emit('number', newNumber)
    // })

    ///////////////////////////
    // Twitter Example
    ///////////////////////////
    // using the twitter stream/socket, listen for tweets and then send the
    // tweet data on to anyone listening on the socket.
    twitterStream.on('tweet', function(data) {
        console.log(data)
        socket.emit('youBeenTweeted', data)
    })

    ///////////////////////////
    // Chat Example
    ///////////////////////////
    // CAVEAT:
    // This is just pseudo code and will not actually work.
    // To create a chat app, the server would need to include methods to 
    // create a room, join a room, leave a room, etc.  
    // This is just intended to show how the server socket has additional
    // capabilities and can do more than just create simple client sockets.

    // here we expect the user to send an object with information in 
    // addition to juse the message to be sent
    // data = {sender:'Joe', recipient:'myRoom', message:'Hi there!'}
    // send a message to an entire room
    // socket.on('talk', function(data) {
    //     socketServer.to(myRoom).emit('talk', data.sender, data.message)
    // })
    // send a message to all socket users
    // socket.on('shout', function(data) {
    //     socketServer.emit('shout', data.sender, data.message)
    // })
    // send a message to a specific person (registered as a socket connection)
    // // data = {sender:'Joe', recipient:'Jane', message:'Hi there!'}
    // socket.on('whisper', function(data) {
    //     socketServer.to(data.recipient).emit('whisper', data.sender, data.message)
    // })

})