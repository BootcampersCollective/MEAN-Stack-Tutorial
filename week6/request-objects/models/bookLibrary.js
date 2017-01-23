var library =[
    {
        name: "Ender's Game",
        author: "Orson Scott Card",
        publicationDate: '1/1/1986',
        genre: "Scifi"
    },
    {
        name: 'Animal Farm',
        author: 'George Orwell',
        publicationDate: '6/23/1960',
        genre: 'Fantasy'
    },
    {
        name: 'Brave New World',
        author: 'GAldus Huxley',
        publicationDate: '7/1/1932',
        genre: 'SciFi'
    },
    {
        name: 'Dune',
        author: 'Frank Herbert',
        publicationDate: '4/23/1985',
        genre:'SciFi'
    }
]


// get all books
function getAll() {
    return library
}

// find a single book by index
function getOne(index) {
    return library[index]
}

function getGenre(genre) {
    return library.filter(function(book) {
        return (book.genre === genre)
    })
}

function addBook(bookInfo) {
    console.log("adding book", book.title)
    library.push(bookInfo)
}

module.exports = {
    findAll: getAll,
    findOne: getOne, 
    findGenre:getGenre,
    addBook: addBook
}