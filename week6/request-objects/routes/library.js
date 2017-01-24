var Library = require('../models/library');

module.exports = {
    // each property you see here is a route handler

    // get books based on query string
    books: function (req, res) {
        console.log("query-string route");
        // if bookid is defined on the request query string...
        if (typeof req.query.bookid !== 'undefined') {
            res.json(Library.findOne(req.query.bookid));
        // if genre is defined on the request query string...
        } else if (typeof req.query.genre !== 'undefined') {
            // if author is defined on the request query string...
            if (typeof req.query.author !== 'undefined') {
                res.json(Library.findGenreAuthor(req.query.genre, req.query.author));
            } else {
                res.json(Library.findGenre(req.query.genre));
            }
        } else {
            res.json(Library.findAll());
        }
    },

    // get all books of a given genre
    genre: function (req, res) {
        console.log("single parameterized route");
        console.log("  params:", req.params);
        var results = Library.findGenre(req.params.genre);
        // We can't handle additional parameters like we can additional
        // query strings.  They must be explicitely defined in index.js.
        // if (typeof req.params.author !== 'undefined') {
        //     results = Library.findGenreAuthor(req.params.genre, req.params.author);
        // } else {
        //     results = Library.findGenre(req.params.genre);
        // }
        console.log("Found " + results.length + " matching book(s).");
        res.json(results.length > 0 ? results : 'No Books :(');
    },

    // get all books of a given genre by a given author
    genreauthor: function (req, res) {
        console.log("double parameterized route");
        console.log("  params:", req.params);
        // How do we get books of one genre using paramaterized URLs?
        var results = Library.findGenreAuthor(req.params.genre, req.params.author);
        console.log("Found " + results.length + " matching book(s).");
        res.json(results.length > 0 ? results : 'No Books :(');
    },

    // Add a new book using data posted from the client.
    createBook: function (req, res) {
        console.log("createBook route");
        Library.addBook(req.body);
        res.status(200).send('OK');
    },
};
