# Intro to Mongo

## SQL vs No-SQL
Structured Query Language (SQL) is a syntax used to query a database.
SQL databases are typically large and take advantage of relationships between small tables.
No-SQL databases are simpler and as a result, more scaleable, for basic data with minimal relationships.

## Terminology
Collection (analogous to a table in a SQL database, or a class in OOP)
Document (analogous to an entry in a SQL table, or an instance in OOP)
Field (analogous to a column in a SQL table, or a property in OOP)

## Installing

Update the brew installer and then install mongodb

```sh
$ brew update
$ brew install mongodb --with-openssl  # --with-openssl is not important if we run on the same server
```

Create the database directory that mongod will use (requires root permissions) and then start the mongo database server process
```sh
$ sudo mkdir -p /data/db # create this directory if it doesn't exist.  Mongod stores its data in that directory.
$ sudo mongod
  password: *****
```

Start mongo and see what databases are present

```sh
$ mongo      # this opens the mongo shell, a command line interface to the database server
> show dbs   Í# note the change of the prompt.  Now we are in the mongo shell, not a terminal shell
> db.help()  # this shows us all of the commands that we can use in the mongo shell
```

Create a database

```sh
> use myDb  # set the current database
# the new database is not shown because it is still empty
> show dbs
```

Create a collection
A database is just an array of collections
and a collection is just an array of documents

```sh
# a collection will be created implicitly just by inserting something into it
# then the document will be created and inserted into the collection
> db.getCollection("contactInfo").insert({
    fname: 'John',
    lname: 'Doe',
    phone: '303-555-5555'
}
> db["contactInfo"].insert({
    fname: 'John',
    lname: 'Doe',
    phone: '303-555-5555'
}
> db.contactInfo.insert({
    fname: 'John',
    lname: 'Doe',
    phone: '303-555-5555'
}
```

We can also refer to a database explicitly instead of assuming a current database (ie. use myDb)

```sh
> myDb.contactInfo.find({})  
# is the same as
> use myDb
> db.contactInfo.find({})
```

Insert() will automatically create an _id field for every document inserted.

You can remote all documents that meet a certain criteria, or remove the entire database as well.

```sh
# remove all documents with fname == 'joe'
> db.contactInfo.remove({fname:'joe'})  
# remove the entire contactInfo collection
> db.contactInfo.drop()
# remove the current database (myDb)
> db.dropDatabase()
```

And finally, to exit the mongo shell...

```sh
> exit
```

You can create a javascript file that will be run before mongo starts that can do things like change your command prompt.
```sh
# ~/.mongorc.js
prompt = function() {
             return db+"> ";
         }
```

## In-Class Exercise
Create a mongo database named 'lingo'
Create a collection called 'dbTerms' that has documents with the properties 'term' and 'definition'

Add the following documents:
- property: a name-value pair
- document: a record consisting of one or more properties
- collection: a group of d
ocuments
- database: a group of collections
- drop: to remove or erase a collection or database
- connect: to use a specific database in a database server

## Solution

```javascript
    lingo.dbTerms.insert([{
        term:'property',
        definition:'a name-value pair'
    },{
        term:'document',
        definition:'a record consisting of one or more properties'
    },{
        term:'collection',
        definition:'a group of documents'
    },{
        term:'database',
        description:'a group of collections'
    },{
        term:'drop',
        definition:'to remove or erase a collection or database'
    },{
        term:'connect',
        definition:'to use a specific database in a database server'
    }])

    lingo.dbTerms.find({ name:'drop' }).print()
```
