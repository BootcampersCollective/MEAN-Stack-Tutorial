$ mongo

# Show a list of all DBs in the server
> show db
# Show a list of database commands
> db.help()

# Selects the myDB database or tells mongo to prep a new database. It will not need to create or store any data until you actually add something to it.
> use myDB     
> show dbs # the new database is not listed because it is empty
# this will show all the commands for a database.
> db.help()

# Insert() will create a collection if it needs to, and then insert the document into the collection.
# The inserted document automatically receives an _id field
# insert a *document* into a *collection* called movie
> db.getCollection("contactInfo").insert({
    fname:'Joe',
    lname:'Blow',
    phone:'303-555-5555'
})
# A database is really just an array of collections, so we can also refer to it this way.
> db["contactInfo"].insert({
    fname:"Jill",
    lname:'Blow',
    phone:'303-555-5555'
})
# or, like JavaScript, we can refer to it this way.
> db.contactInfo.insert({
    fname:'Bob',
    lname:'Johnson',
    phone:'303-444-4444'
})
# and you can bulk insert documents as an array of objects
> db.contactInfo.insert([{
    fname:'Eric',
    lname:'Clapton',
    phone:'303-222-2222'
}, {
    fname:'Jethro',
    lname:'Tull',
    phone:'303-333-3333'
}])

# Once we have a document, the collection and the database are automatically created for us.
> show dbs  # Now that we have a document stored, the new database shows up
# This command will list all collections in the currently USEd database.
> show collections   
# this will show you all the commands for a collection.  
> db.collection.help()

# Find all documents that match the given criteria. Can be blank to find all documents.
> db.contactInfo.find({ lname:'Blow' }) # db.myCollection.find({criteria})

> db.contactInfo.find({}) # an empty criteria object returns all documents.
# findOne() is the same as find, but only gets first match.
> db.contactInfo.findOne({ lname:'Blow' }) # db.myCollection.findOne({criteria})
#.pretty() - outputs in json <format>
> db.contactInfo.find({ }).pretty()

#.sort({field:1}) - sorts collection on field in ascending order (-1 for descending)
> db.contactInfo.find({ }).pretty().sort({ fname:1 })

# Change single document that matches the criteria to the new document information.  
# Replaces the entire document!
> db.contactInfo.update({
    fname: 'Bob'
}, {
    fname: 'Rob',
    lname: 'Johanson'
}) # notice that the phone number goes away.

# There are many options to update.  For example, to add state='CO' to each document...
> db.contactInfo.update({}, {
    $set:{ state:'CO' }
},{ multi:true }) # db.myCollection.update({criteria}, {update}, {options})