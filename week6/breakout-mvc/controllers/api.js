// api.js
// is intended to provide a library of functions that might be used
// to handle different route requests - both middleware and route handlers.

var Contacts = require('../models/contacts.js')

module.exports = {

    // we have a whole series of routes (/api/*) that should only be accessed
    // by someone who is logged in
    // for our example, we will look for a query parameter named
    // 'user' and verify that it has a value.  
    // if the user has a value, we'll go on.
    // if not, we'll send a rejection message
    // Our URL will look something like 
    // //localhost:8080/api/data1?user=123
    checkUserMiddleware: function (req, res, next) {
        console.log('hit our api security test');
        console.log(req)
        if (req.query.user) {
            next();
        } else {
            res.send("Entry denied.")
        }

    },

    // this method will call a function from our model (contacts.js)
    // to get some data and then return it to the client.
    // if we wanted to manipulate the data somehow (ie. sort an array,
    // capitalize all names, find zip codes for each address, etc)
    // that would happen in this function as well
    getData1: function (req, res, next) {
        res.json(Contacts.getContact(0))
    },

    // we can send back json data..
    getData2: function (req, res, next) {
        res.json(Contacts.getContact(1))
    }
}