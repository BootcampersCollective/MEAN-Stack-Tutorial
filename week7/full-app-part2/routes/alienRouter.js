var aliensStorage = require('../models/aliensModel.js');
var bodyParser = require('body-parser')

module.exports = function (app) {
    // make sure we are loading this router
    console.log("Router loaded")

    // Root Route
    app.get('/', function (req, res) {
        // sendFile uses a PATH, not a URL
        res.sendFile('index.html', { root: './public/html' });
    }),

    // GET: /aliens  - get all aliens
    app.get('/aliens', function (req, res) {
        aliensStorage.find({}, function (err, aliensArray) {
            if (err) {
                console.log("Database find() error:", err);
                // send back a server error
                res.status(500).json(err)
            } else {
                res.send(aliensArray);
            }
        })
    })
}