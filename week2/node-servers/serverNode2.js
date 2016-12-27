// require http, fs, path, and whatever other packages we are going to need
// here we are chaining our variable declarations, separating them with commas
// rather than declaring each variable on its own line.
var http = require('http'),
    fs = require('fs'),
    path = require('path')
var host = 'localhost', port = 1337

// use http to create our server...
http.createServer((req, res) => {

    // use the path module to pull off the extension of the url
    // (ie. index.html -> html,  main.css -> css, etc.)
    var extname = path.extname(req.url);

    console.log("File extension: " + extname)

    // we can create a huge if/else if/else statement again like we did
    // in the first server, or we can use a switch statement to handle
    // each case.  So instead of this:
    //     if (extname === '.html') { ... }
    //     else if (extname === '.css') {}
    // we use this
    switch (extname) {
        case '.html':
            // for ANY route that ends in .html, we will send index.html
            // instead of this, we could write this to say
            // for any route that ends in .html, look in the /public/html directory
            // and if that file exists, send it.  Otherwise send a 404.
            console.log("handling an html file")
            fs.readFile(__dirname + '/public/html/index.html', (err, contents) => {
                if (err) {
                    res.writeHead(404, { 'Content-Type': 'text/plain' })
                    res.end("Page not found!")
                } else {
                    res.writeHead(200, { 'Content-Type': 'text/html' })
                    res.end(contents)
                }
            })
            break;
        case '.css':
            // as above, for .css routes, just send the main.css file
            console.log("handling an css file")
            fs.readFile(__dirname + '/public/styles/main.css', (err, contents) => {
                if (err) {
                    res.writeHead(404, { 'Content-Type': 'text/plain' })
                    res.end("Page not found!")
                } else {
                    res.writeHead(200, { 'Content-Type': 'text/text' })
                    res.end(contents)
                }
            })
            break;

        case '.js':
            // as above, for .js routes, just send the main.js file
            console.log("handling an js file")
            fs.readFile(__dirname + '/server/main.js', (err, contents) => {
                if (err) {
                    res.writeHead(404, { 'Content-Type': 'text/plain' })
                    res.end("Page not found!")
                } else {
                    res.writeHead(200, { 'Content-Type': 'text/text' })
                    res.end(contents)
                }
            })
            break;
        default:
            // if we don't know how to handle this file type extension, send
            // back a 404 status message saying we don't know what to do
            console.log("unknown file type!")
            res.writeHead(404, { 'Content-Type': 'text/plain' })
            res.end("Unknown file type!")

    }
// and finally, start that listener up
}).listen(port, host, () => {
    console.log("Server is listening to port " + port)
})
