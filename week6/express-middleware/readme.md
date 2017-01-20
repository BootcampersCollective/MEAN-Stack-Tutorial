# Express Middleware

# Vertically Mounted
Vertically mounted middleware are functions which are process IN ORDER (order is important!)
from top to bottom - or to the first middleware that sends a response.
Each function in the middleware chain must either send a response and end the chain
or call next() to move on to the next function in the middleware chain.

This is the generic, common style of writing middleware to handle general case
needs (like authentication and logging).

For example:

```javascript
// function 1
app.use('*', function(request, response, next) {
    ...
    next()
}

// function 2
app.use('*', function (request, response, next) {
    ...
    next()
}

// this will run function1 then function2, in the order in which they
// are defined top to bottom in this file
app.use('/myRoute', function(request, response, next) {
    ...
})
```

## Horizontally Mounted
Horizontally mounted middleware uses functions defined earlier in the file as 
arguments to the middleware call - calling each function in order.

This is typically used to handle special cases where particular functions must be 
run in a specific order before the route is handled.

For example:

```javascript
var middleware2 = function(request, response, next) {
    ...
    next()
}

var middleware1 = function(request, response, next) {
    ...
    next()
}

// this will run middleware1() then middleware2(), even though 
// they are defined in a different order in the file.
app.use('/myRoute', middleware1, middleware2, function(request, response, next) {
    ...
})
```

## Third Party Middleware
npm packages that we can install and use to do things like log request information (morgan)
and parse the body of the request into a javascript object via json (body-parser)
- express
- morgan
- body-parser

## Custom Middleware
Middleware functions that you write that will do custom things to process your
request or modify the response as it works through the chain.
- custom authentication
- logging
- analytics

## Class Exercise
Write some middleware to intercept all GET requests, console.log a 
message and then proceed to the next sttep in the midleware chain.
Then write another middleware function in the middleware chain to log a message
to the console and send a response back.


