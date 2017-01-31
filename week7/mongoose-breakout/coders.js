// This is our model file which will typically be required by controller(s) and used to
// access data from the database.  
var mongoose = require('mongoose')

// default mongodb port is 27017
// PROTOCOL://HOST_MACHINE{:NON_DEFAULT_PORT}/DB_NAME
var connected = mongoose.connect('mongodb://localhost/devTeam').then(function(err) {
    if (err) {
        console.log('DB Error:', err)
    } else {
        console.log('Database connected')
    }
})

// create a schema for our coder objects
// create a collection in our database
// The permitted SchemaTypes are String, Number, Date, Buffer, Boolean, Mixed, ObjectId, Array
var Coder = mongoose.model('Coder', {
    name : { type:String, required: true,      unique:true},
    developer: {type:Boolean, required:true},
    speciality: String,
    abilityLevel: Number, // 1-10
    language: String, 
    Phone: {type:String, required:true}
})

// CRUD - the fundamental database operations
// Create, Read, Update, Delete

//////////////////////
// Create
//////////////////////
// newCoder = {name:'value', developer:'value', ... }
function createCoder(newCoder) {
    var dbCoder = new Coder(newCoder);
    console.log("New Coder:", newCoder)
    console.log("DB Coder:", dbCoder)
    // The save() call is ASYNCHRONOUS, so we cannot return a success or failure status.  We can only return a promise.
    return dbCoder.save()
}

//////////////////////
// Read
//////////////////////
function getCoders(res) {
    Coder.find({}), function(err, coders){
        if (err) {
            console.log('No coders found')
        }
        res.send(coders);
    }
    // getCoder({}, res);  // we could optionally re-use the getCoder() function to get all coders as well
}

// the query parameter will contain zero or more properties with values which
// will be the basis of our search
// var queryExp = new RegExp('^'range+$,'i')  // ^ - beginning of line, i - case insensitive
// Example: query={language:'Java', abilityLevel:queryExp}  // using a regex
// Example: query={language:'Java', abilityLevel:/^[1-3]/i}  // using a regex
// Example: query={language:'Java', abilityLevel:{$lt:4}}  // same thing using mongoose's syntax - preferred

// A note about asynchonousity...
// Mongoose makes its function calls asynchronously, so trying to return a result directly is very difficult - if possible at all.
// In this case, I am passing in the response object from the controller so that this method can
// send back the coders directly to the client whenever it returns with a a result.
// See http://stackoverflow.com/questions/6180896/how-to-return-mongoose-results-from-the-find-method
function getCoder(query, res) {
    // if a null query is passed in, set the query object to be empty - which will return ALL coders
    Coder.find(query || {}, function(err, coders) {
        if (err) {
            console.log('Find failed')
        }   
        console.log("Found", coders.length,"coders")
        res.send(coders);
    })
}

//////////////////////
// Update
//////////////////////
// query = {name: 'Joe'}
// update = {language:'Java'}
function updateCoder(query, update) {
    console.log(query,"to", update)
    Coder.findOneAndUpdate(query, {$set: update}, null, function(data) {
        console.log("Update:",data)
    })
}

//////////////////////
// Delete
//////////////////////
function deleteCoder(query) {
    Coder.remove(query, function(err) {
        if (err) {
            console.log('Found no coders that meet the criteria to remove')
        }
    })
}

module.exports = {
    connected: connected,
    makeCoder: createCoder,
    findCoders: getCoders,
    findCoder: getCoder,
    changeCoder:updateCoder,
    removeCoder: deleteCoder
}