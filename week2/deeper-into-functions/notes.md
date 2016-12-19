# Deeper into Functions

## Review
A function `declaration` looks like:

```javascript
myFunction(arg1);
myFunction = function(param1) {
    // do something
}
```

A function `expression` looks like:

```javascript
var myFunc = function() {}
myFunc()
```

A function `invocation` looks like:

```javascript
myFunction(argument1);
```

## Scope (local vs global)

```javascript
var var1 = 1; // global scope

myfunction = function(param1) {
    var var2 = 2;  // local function scope
    // both variables (local and global) are accessible here
}

// only var1 (global) is accessible outside the function
```

## Garbage Collection

Javascript does automatic garbage collection based on scope
and when a variable reference is lost

```javascript
var person = {name:'Bill', address :'123 Main Str'}
// when person is set to a new value, the old value object (Bill) has no reference
// and will be garbage collected
person = 'Monali';  

var movie = {
    title : 'James Bond',
    info : {
        genre: "action",
        length : 93,
        rating: 'PG-13'
    }
}
var movieData = movie.info;  // here I create a reference to a property inside the movie object
// when I set movie to a new value, my original movie title 'James Bond' is garbage collected
// but since there is still a reference to that internal object (genre, length, etc) it is not 
// garbage collected and is still accessible via movieData
movie = 'HR Stuff & Puff' 
```

## Operators

### Unary operators
For example: ++, --, +=, *=, etc.

### Binary operators
For example: +, -, *, /, %

### Ternary operators
```javascript
var variable = CONDITION ? TrueValue : FalseValue;
```

``` javascript
// I want to set a variable to one thing if a condition is true, and another if it's false
// this is a long, cumbersome way to do that
var numType = null;
if (typeof num1 !== 'number') {
    numType = 'str'
} else {
    numType = 'num'
}

// a ternary operator is a shorthand way of doing the same thing
var numType = (typeof num1 != 'number') ? 'str' : 'num'

// a nested ternary operator
var numDescr = (typeof num1 == 'string') ? 'str' : (typeof num1 == 'num') ? 'num' : "i don't know"
```

## Arguments and Parameters

How does javascript handle more parameters than arguments?

Parameters with no corresponding arguments are left undefined
```javascript
var greet = function (names, greeting) {
    console.log(greeting); 
    for (var i = 0; i < names.length;i++) {
        console.log("Hi there, "+names[i])
    }
}

myFunction(['Joe', 'Jill'], 'hi')
// hi
// Hi there, Joe
// Hi there, Jill
myFunction(['Joe', 'Jill'])
// undefined
// Hi there, Joe
// Hi there, Jill

```

How does javascript handle more arguments than parameters?

```javascript
var greet = function () {
    console.log("hi");
    // arguments can be handled using the built in variable arguments
    // this variable is available in EVERY function 
    for (var i = 0; i < arguments.length;i++) {
        console.log("Hi there, "+arguments[i])
    }
}

myFunction();
// hi
myFunction('Joe');  /
// hi
// Hi there, Joe
```

## Closure
**This is a big concept in javascript**
Closure takes advantage of variable references, functional scoping & garbage collection to hide variables,
which is sometimes called making the variable 'private' instead of 'public'

// defining playerConstructor as an object as no closure

```javascript
var playerConstructor =  {  
     health : 100,
     doDamage : function(damage) {
        health -= damage
        if (health < 0) {
            console.log('Arggggg!')
        } else {
            console.log('still have'+health+' health left')
        }
    }
}

var charlie = playerConstructor;
charlie.health;      // == 100
charlie.doDamage(10) // changes charlie's health to 90
```

What if we don't want to expose an object's properties to other functions?

Because the variable health is inside a function, it is scoped to that function
and can't be accessed outside that function, but the anonymous function that 
is returned uses that local variable so it is not garbage collected.

```javascript
var playerConstructor = function() {  
    var health = 100;  // playerConstructor 'has closure over" health
    return function(damage) {
        health -= damage
        if (health < 0) {
            console.log('Arggggg!')
        } else {
            console.log('still have'+health+' health left')
        }
    }
}

var charlie = playerConstructor;
charlie.health;      // is undefined (it is out of scope, but not garbage collected, so it's accessible to the function)
charlie(10)          // changes charlie's health to 90
```

## Callbacks
**This is a big concept in javascript.**
Callbacks are functions that are passed to another function and invoked
by that function when it is invoked.

Functions that use callbacks are sometimes called a 'higher order function' (a function that takes a function reference as an argument)

```javascript
var delayInMilliseconds = 3000; // javascript date/time is always stored in milliseconds

console.log('start the clock')
// setTimeout will wait a period of time and then call the callback function 
var timeoutIt = setTimeout(
    function() {  // this first argment to setTimeout is a callback function
        console.log("time's up!");
    }, 
    delayInMilleseconds);

// setInterval will run the callback function, wait a given number of milliseconds and then repeat
console.log('start running on interval')
var interval = setInterval(function() {
    console.log('another 3 seconds have passed')
}, delayInMilliseconds)

var arr = ['San Diego', 'Chicago', 'New York', 'Austin', 'Squim']
console.log("original array", arr)
// sort uses a callback function (in this case, defined anonymously as an argument)
// to determine how the sort will be performed
var sortedArr = arr.sort(function(a,b) { return a > b}) // this will sort the array in ascending alphabetical order
console.log("sorted array", sortedArr) // the sorted array is returned
console.log("original array", arr) // the original array has been sorted as well
```