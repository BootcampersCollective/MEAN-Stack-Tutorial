// io() comes from the socket.io.js file that we brought in via a script tag in index.html
var sockIt2Me = io();

// There are two methods that sockIt2Me provides that are of interest to us
// socket.on()
// socket.emit()

// every two seconds after loading the page, we will send a random number to the server
// setInterval(function() {
//     sockIt2Me.emit('newNumber', Math.random());
// }, 2000);

// when the server sends a number, we will append it to the body of our index.html page
sockIt2Me.on('number', function(data){
    document.body.innerText += data +'\n'
})