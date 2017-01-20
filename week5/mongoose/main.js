// first we require the mongoose node package...
var mongoose = require('mongoose')

// the connection string format looks like this:
// protocol://<domain>/<database>
// mongodb://localhost/myDatabaseName

// let's connect to a database named contacts on this local host
mongoose.connect('mongodb://localhost/contacts',(err) =>{
    if (err) {
        console.log("Bad news:", err)
    } else {
        console.log("Mongoose connected!")
    }
})

// a MODEL is a SCHEMA or template for a collection 
// this is analogous to a Class in javascript
// note that the collection (contactInfo) is specified in the model
// so now by referring to Person, we know which collection in which database on which machine we are using
var Person = mongoose.model('contactInfo', {
    fname: { type:String, required:true },
    lname: String,
    phone: { type:String, unique:true },
    age: Number,
    isMarried: Boolean,
    created: {type:Number, default:() => Date.now() }
})

// once the connect and model are defined, using the database becomes very easy


// this is analogous to insert()
function createPerson(attributes) {
    var person = new Person(attributes);
    console.log(person);
    person.save(); //saves this person object to the database
}

// this is analogous to find()
function getPeople(query) {
    // this will use the query passed in, but if no query is passed in
    // we're going to instead pass an empty object which will find all
    // documents in the contactInfo (Person) collection
    Person.find(query || {}, (err, people) => {
        if (err) {
            console.log("Couldn't find person:", err)
        } else {
            console.log(people)
        }
    })

}

// show the people in the database
getPeople();

// this is how we create a new person
createPerson({
    fname:'jane',   // this property is required (by our model definition)
    lname:'smook', 
    phone:'222-333-5535',   // this property must have a unique value (by our model definition)
    isMarried:true,
    canRideABicycle:false  // since this property isn't in the model, it is ignored
    // similarly, we never defined the age property so it is left undefined
})

// now show the people PLUS the new person we just added
console.log("and then...")
getPeople();

// and this is how we would pass a query parameter into our Person.find() method
// to get only those people that meet the given criteria
getPeople( {fname:'jane'} );