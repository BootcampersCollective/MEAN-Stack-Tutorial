# Modular Code 

## Separation of Concerns
As an application grows in complexity and length, it becomes harder to maintain.
We want to be able to break up a file into smaller, more modular pieces based on
a "separation of concerns."  Specifically, 
- server.js JUST listens for requests and passes them off to the router
- controller/router.js JUST looks at the route/path and passes the requet off to the handler
- controller/api.js JUST handles the request and returns a response.  To do that, it needs data from the model.
- models/contacts.js JUST retrieves data and returns it via functions

In order to do this, we need to create relationships between our files using `module.exports` on one side and `require` on the other.

We can export data and/or functions as an object from one file using `module.exports` and then we can use that data and/or functions by using `require` in a separate file to give that object a name.

For example:

```javascript
// ./thing.js
module.exports = {
    data : [1,2,3,4,5], 
    myFunction : function(myArray) { console.log('my function says', myArray)}
}
```

and then we can use that data/function this way

```javascript
var myThing = require('./thing.js);

var anArray = myFunction.data;

myThing.myFunction(anArray);
```