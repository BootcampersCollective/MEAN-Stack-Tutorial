
var num1 = 1
console.log(typeof num1)
// a ternary operation
var numType = (typeof num1 != 'number') ? 'str' : 'num'
// log the the result
console.log(num1+' is a '+numType+' ('+typeof num1+')')

// this shows how the built in variable arguments can be used
// note that console.log() is written to have no parameters and just cycles over all arguments passed to it, printing them out
var greet = function () {
    console.log("hi");
    for (var i = 0; i < arguments.length;i++) {
        console.log("Hi there, "+arguments[i])
    }
}

// this demonstrates what happens if a parameter has no corresponding argument
var greet = function (names, greeting) {
    console.log(greeting);
    for (var i = 0; i < names.length;i++) {
        console.log("Hi there, "+names[i])
    }
}
greet('Joe');

// closure - you can do damage, but you can't look at the health variable value
var playerConstructor = function() {
    var health = 100;
    return function(damage) {
        health -= damage
        if (health < 0) {
            console.log('Arggggg!')
        } else {
            console.log('still have '+health+' health left')
        }
    }
}
var charlie = playerConstructor
charlie.health // undefined
charlie(10)    // still have 90 health left
charlie(20)    // still have 70 health left


// Callbacks
// var delayInMilliseconds = 3000;

console.log('start the clock')
// setTimeout() takes a callback function as it's first parameter
var timeoutIt = setTimeout(
    function() {
        console.log("time's up!");
    }, 
    delayInMilliseconds);

console.log('start running on interval')
// setInterval() is a good method for doing polling
var interval = setInterval(function() {
    console.log('another 3 seconds have passed')
}, delayInMilliseconds)

// the built in method array.sort() takes a callback function
// which determines how the array will be sorted.
// note that array.sort() modifies the original array as well as 
// returning the sorted array
var arr = ['San Diego', 'Chicago', 'New York', 'Austin', 'Squim']
console.log("original array", arr)
// define a couple of ways to sort the array
ascendingLength = function(a, b) {
    return a.length > b.length;
}
descendingLength = function(a, b) {
    return a.length < b.length;
}
var sortType = 'ascending'
// based on the sortType, use a ternary operator to select
// which sorting method will be passed in to array.sort() as the callback
var sortedArr = arr.sort((sortType == 'ascending'?ascendingLength:descendingLength))
console.log("sorted array", sortedArr)
console.log("original array", arr)