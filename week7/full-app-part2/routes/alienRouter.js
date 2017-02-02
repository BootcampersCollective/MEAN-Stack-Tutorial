var aliensStorage = require('../models/aliensModel.js');

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
    }),

    app.post('/alien', function(req, res) {
        console.log("saving", req.body)
        // take our req.body object and use it to create a aliensStorage model
        var newAlien = new aliensStorage(req.body);
        // then we can use the save() method on the model to save it to Mongo
        newAlien.save(function(err){
            if (err) {
                console.log("Database insert() error:", err);
                // send back a server error
                res.status(500).json(err)
            } else {
                res.send(req.body);
            }
        })
    })
}