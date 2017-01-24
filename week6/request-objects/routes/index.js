// routes/index.js : nice to call it a MASTER route file
// This default file will be read when requiring "routes" (the directory)
console.log("Loading routes");
// similar to the config of ui-router, ngRouter
// the Controller part of the MVC
var LIBRARY = require('./library');

module.exports = function (app) {
    app.get('/', function (req, res) {
        res.sendFile('index.html', { root: './public/html' });
    });

    // Books Route
    // /library/books
    // /library/book?id=1
    // /library/book?genre=comedy
    // /library/book?genre=comedy&author=Bozo
    app.get('/library/books', LIBRARY.books);

    // How do we get books of one genre using paramaterized URLs?
    // github.com/refactoru
    // github.com/devaio
    // github.com/*

    // Books Route (paramaterized)
    // /library/books/horror
    // /library/books/teenromance
    // /library/books/comedy
    app.get('/library/books/:genre', LIBRARY.genre);

    // Genre/Author Route
    // /library/books/comedy/Bozo
    app.get('/library/books/:genre/:author', LIBRARY.genreauthor);

    // Create Book Route
    app.post('/library/createBook', LIBRARY.createBook);
};