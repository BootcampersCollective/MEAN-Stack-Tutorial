var library = [
	    {
        title: "Ender's Game",
        author: "Orson Scott Card",
        publicationDate: '1/1/1986',
        genre: "Scifi"
    },
    {
        title: 'Animal Farm',
        author: 'George Orwell',
        publicationDate: '6/23/1960',
        genre: 'Fantasy'
    },
    {
        title: 'Brave New World',
        author: 'GAldus Huxley',
        publicationDate: '7/1/1932',
        genre: 'SciFi'
    },
    {
        title: 'Dune',
        author: 'Frank Herbert',
        publicationDate: '4/23/1985',
        genre:'SciFi'
    },
	{
		title  : "How to tell if your cat is plotting to kill you",
		author : 'Bozo',
        publicationDate: '4/1/2017',
		genre  : 'comedy',
	},{
		title  : 'Exiting Vim',
		author : 'O\'Rly',
        publicationDate: '3/3/1978',
		genre  : 'horror',
	},{
		title  : 'It',
		author : 'Stephen King',
        publicationDate: '5/3/1973',
		genre  : 'horror',
	},{
		title  : 'Bugs Bunny Goes to Town',
        publicationDate: '4/4/2015',
		author : 'E. Fudd',
		genre  : 'comedy',
	}
];

// Find all books
function findAll (){
	return library;
};

// Find a single book (by index)
function findOne (index){
	return library[index];
};

// Find all books based on a property - genre
// We could also add functions to find books based on other individual properties.
function findGenre (genre){
	return library.filter(function(book){
		return book.genre === genre;
	});
};

// Find all books based on a combination of properties - genre and author
function findGenreAuthor (genre, author){
	return library.filter(function(book) {
		return (book.genre === genre && book.author === author);
	});
};

// Add a book to the library
function addBook (bookInfo){
	console.log('Adding new book "' + bookInfo.title + '" by ' + 
		bookInfo.author + ' a ' + bookInfo.genre + ' book.' );
	library.push(bookInfo);
};

// export these functions, but not the library itself
module.exports = {
	findAll         : findAll,
	findOne	        : findOne,
	findGenre       : findGenre,
	findGenreAuthor : findGenreAuthor,
	addBook         : addBook,
};