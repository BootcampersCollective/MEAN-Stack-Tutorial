# Sockets
Unlike the Request/Response process behind HTTP, a socket allows for a connection to remain
open between the client and server.  This allows for real time, bidirectional data transmission.

We use the `socket.io` node module (on the server side) and javascript library (on the client side)
to easily create sockets and transmit data back and forth.

## Why sockets?
Bidirectional communication between the client and server - the server can initiate a message after socket is established
Real time - rather than doing some kind of periodic polling to ask the server for new information, the server can send new information as it comes in

## Why not?
Sockets are more demanding of bandwidth and hardware resources.  If messages/data that is sent is large, this can be a tremendous load for the server to handle.
If you don't have a real-time need, you might consider polling for data instead (sending AJAX requests on some kind of time interval)

## Socket.io
A server socket (which controls all socket connections) is created by passing the
socket.io function with the http server (var httpServer = app.listen(...)).
The server socket then listens for client socket connections and manages the handling of socket routes.


Socket.io client sockets are primarily based on two methods:  
`socket.emit(NAME, DATA)` - sends data, creates a socket event  
`socket.on(NAME, Function(DATA))` - recieves data, handles a socket event  

See [Socket.io](http://socket.io/docs/) for more information.
