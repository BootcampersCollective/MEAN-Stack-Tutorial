# Javascript Structures
Arrays, Objects, & Loops


## Arrays

an array of the same type of element is homgenious

```javascript
var days = ['Sunday', 'Monday' , 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];  
```

or it can hetrogenious ('jagged') with elements of different types

```javascript
var stuff = [1, 'string', true, days[0]]; 
```

You can access elements of an array using square bracket notation.
Note that the first element of the array is at index 0.

```javascript
stuff[1] = 'string' // grab the second element of the array
```

We have various kinds of unary operators, like the increment/decrement operator.

```javascript
var index = 0;
index++      // increment
index += 2;  // increment by 2
index -= 1   // the same as index--  or index = index - 1
index *= 3;  // multiply index by 3
index /= 2;  // divide index by 2
```

## For loop

The for loop starts with the initial value of the index, then the end condition, then the offset (incrementor/decrementor) and then the body of the loop.
This is typically the kind of loop you will use to iterate through an array.
```javascript
for (var i = 0;         // initializer
    i < days.length;    // conditional termination statement
    i++) {              // incrementor
         console.log(days[i]);
    }
```
More typically, the initializer, end condition and offset are on a single line.

```javascript
// for each day of the week
for (var i =0; i< days.length; i++) {
    if ( i % 2 == 0 ) { // only log even numbered days
         console.log(days[i])
    }
    // find the weekend days - we can do this in a number of ways
    // if (i == 0 || i == 6)
    // if (days[i].substr(0,1) == 'S')
    // if (days[i].toUpperCase().indexOf('S') >= 0)
    // this is probably the most readable/understandble version, but they all do the same thing
    if (days[i] == 'Sunday' || days[i] == 'Saturday') {
         console.log("Party time!");
    }
}
```

## While loop
A while loop runs until an end condition is met.

```javascript
var nums = [1,2,3,4,5,6,7,8,9];
var i=0;
while (i < 5) {
    console.log(days[i]);
    i++; // if there is no increment operation this would be an infinite loop!  BAD!
}
```

## Objects
Objects are a construct that allow us to group different bits of data (properties) into a single thing (an object!).
Use the curly braces {} to define an object.

// This is a poor way to save information about a movie - too many pieces that have no logical/intrinsic binding.
// var movieName = 'Rogue 1';
// var movieLength = 93;
// var movieGenre = 'SciFi';

```javascript
// This is a better way - an object!
var rogue1 = {
    name : 'Rogue 1',
    length : 93,
    genre : 'SciFi'
}

var thor = {
    name : 'Thor',
    length : 124,
    genre : 'SciFi'
}
```

We can create an array of objects.  An array is a list of things, whereas an object is a group of properties.
An array is a list; an object is a single thing with properties that describe it.

We can also create an anonymous object (Jaws) directly when defining the array.
It's called anonymous because we can refer to it directly.  Only through the movies array.
The named objects (rogue1 and thor) we can also refer to directly.

```javascript
var movies = [rogue1, thor, { name:'Jaws', length:44, genre:'Thriller'}]

thor.name = 'My Thor';        // this is how you access a property in an object, using a .
movies[2].name = 'More Jaws'; // and here is how we'd get at the name of that anonymous movie
movies[2]['genre'];           // or some other property...

var duration = 'length';      // we can also use the name of a property to access the property
movies[2][duration];          // putting the name in square brackets, like an index in an array
thor['genre'];                // or we can use a string literal directly

// here we are pushing a new movie into the movies array as the last element in the array
movies.push({name:'Other Movie Name', length:23, star: 'Justin Beiber'})

// we would use unshift and shift to add/remove elements to the beginning of an array
// just like we use push and pop to add/remove elements from the end of an array
```

### Examples

```javascript
// for each movie in the movies array...
for (var i=0; i < movies.length;i++ ) { // loop over an array of elements
    console.log(movies[i].name);  // log the name of each element
    for (var prop in movies[i]) {  // loop over the properties of an object
    // prop is the name of the property in the object, so movies[i][prop] is the *value* of that property
        console.log('The '+prop+' of ' +movies[i].name +' is '+movies[i][prop]);
    }
}
```

Another example for the autophiles out there

```javascript
var fiat = {
    wheelsFlat : true,
    make : 'Fiat',
    model: 'Spider',
    year : 1970
}
var cruzer = {
    wheelsFlat : false,
    make : 'Toyota',
    model: 'FJ Cruiser',
    year : 2010,
    stereo : 'awesome'
}

var cars = [fiat, cruzer];
console.log("first we have");
for(var i = 0; i< cars.length; i++) {
    console.log(cars[i]);
}

cars.push({wheelsFlat:false, make:'Nissan', model:'Frontier', year:2015});
cars.push(cruzer);

console.log("Then we have");
for(var i = 0; i< cars.length; i++) {
    console.log(cars[i]);
}
```

And we briefly talked about having a nested object (an object in another object)

```javascript
var contact = {
    name: 'Joe',
    phone: 3035555555,  // if we store phone as a number, we can't use 303-555-5555 syntax
    mother : {
        name: "mildred",
        age: 93
    }
}
```
