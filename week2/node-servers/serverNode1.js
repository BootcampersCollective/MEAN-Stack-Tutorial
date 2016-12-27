// we are going to use the built in module 'http' to create a simple node server
var http = require('http')

var host = 'localhost'
// set our port to the port nubmer given on the command line
// or, if that command line argument doesn't exist, set it to 1337
var port = process.argv[2] || 1337

// EC5 syntax for a function looks like:
// var myFunc = function(param1) { ... }

// EC6 syntax for a function looks like:
// var myFunc = (param1) => { ... }

// use the http object to create a file
http.createServer( (req, res) => {
    // log the URL that was requested
    console.log('URL requested ', req.url);

    // we need to add some information to the response header object
    // namely - the status code (200 means success) and the type of the content
    // that we are sending back (ie. text, html, json, etc)
    res.writeHead(200, {'Content-Type':'text/html'})

    // if the root route is requested, do this
    if (req.url === '/') {
        res.end('<h1>This is the root home page</h1>')
    // else if the /about.html route is requested, do this
    } else if (req.url === '/about.html') {
        res.end('<h1>This is the about page</h1>')
    // else if the /faq.html route is requested, do this
    } else if (req.url === '/faq.html') {
        res.end('<h1>This is the FAQ page</h1>')
    // else if, else if, else if
    // we could add a new else if clause for every route that we are supporing
    // but that would be long and tedious.  Maybe there is another way we could
    // write the server...
    } else {
        res.end('<h1>Page not found!</h1>')
    }

}).listen(port, host, () => {
    console.log('Server is up and listening to port ', port)
})

