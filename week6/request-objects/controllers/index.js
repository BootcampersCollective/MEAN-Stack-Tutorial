var Library = require('./library');

module.exports =  function(app) {

    // handle the basic root route
    app.get('/', function(req, res) {
        res.send('Hello Squirrel')
    })

    // /books - findAll
    app.get('/books', Library.books);

    app.get('/books/:genre', Library.genre)

}