// models/contacts.js
// A model is a chunk of data that we are storing. 
// it may be hard coded like this example, or it may
// access a database to get data.
var contacts = [
    { name: 'Joe Blow1', address: '123 Main St' },
    { name: 'Joe Blow2', address: '123 Main St' }
]

// we are exporting only the functions that access the data,
// not the data itself.  In this way we control access and
// limit the data we are shipping around to only what is needed.
module.exports = {
    // this will return a single contact from the array,
    // based on the given index value
    getContact: function(index) {
        return contacts[index];
    },
    // this will return all the contacts in the array
    getAllContacts: function() {
        return contacts;
    }
}