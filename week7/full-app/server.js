var express = require('express');
var app = express();

// serve up any file in the ./public/html directory
app.use(express.static('./public'))

// Routes
app.get('/', function(req, res) {
    // sendFile uses a PATH, not a URL
    res.sendFile('index.html', {root:'./public/html'});
})

app.listen(8080, function(err) {
    if (err) {
        console.log("Server failed to start:", err)
    } else {
        console.log("Server is up on port 8080")
    }
})