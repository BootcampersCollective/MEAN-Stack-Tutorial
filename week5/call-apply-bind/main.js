// var alice = {
//     name : 'alice',
//     lazyGreeting : function(){
//         //console.log(this.name)
//         var localFunc = function(){
//             console.log(this.name)
//         }
//         // localFunc is 
//         localFunc()

//     } 
// }

// alice.lazyGreeting()



// var outer = function(){
//     var foo = 10
//     var mid = function(){
//         var inner = function(){
//            console.log(foo) 
//         }
//         inner()
//     }
//     mid()
// }
// outer()

// call is a method that all functions have
// the call method can be used to invoke a function with a forced value for this



var sayHello = function(excited){
    if ( excited ) { var ending = '!'}
    else { var ending = '.'}
    console.log(this.name + ending)
}

// sayHello() // undefined

// var alice = {
//     name : 'alice',
//     sayHello : sayHello
// }

// context matters. in this context, 'this' refers to the alice object
// alice.sayHello()

var alice = {
    name : 'alice'
}

// call takes at least one argument. what should the value for 'this' be?
// sayHello.call(alice)

var superLog = function(){
    // inside of every function, the variable 'arguments' is defined automatically
    // it is an array-like object that contains the arguments that were passed into the function
    // console.log(arguments)
    // console.log(arguments.forEach)
    // console.log(arguments.map)
    // console.log(arguments.filter)
    console.log('hi');
    // if you start a line with an open paren/brace/bracket, the previous line must end with a semicolon
    [].forEach.call(arguments,function(el){
        console.log(el)
    })
    
}

// superLog('hello', 10, [1,2,3])

// console.log('hello'.length)
// console.log('hello'[1])

var greeting = 'hello'

var shoutingGreeting = [].map.call(greeting, function(el){
    return el.toUpperCase()
}).join('')


// console.log(shoutingGreeting)
var logStringNumberThis = function(str, num){
    console.log(str)
    console.log(num)
    console.log(this)
    
}

// this first argument passed to call is our value for this. the latter arguments are the normal arguments to the function, offset by 1
// logStringNumberThis.call('foo', 'hello', 10)

var foo = function(){
    console.log('hi')
}
// our function foo doesn't care about its 'this' value, so using call like this has no meaningful effects
//foo.call('whatever')

var numbers = [1,6,99,43,2,67]

// console.log(Math.max(4,7,11,9)) // Math.max takes a comma separate list, not an array. How can we feed our numbers array into math.max?

// apply is identical to call, except it only takes 2 arguments. the first argument is a forced value for this, and the second argument is an array that contains the arguments to the original function
// console.log(Math.max.apply(null, numbers))

// the answer to the question of "when do i use call vs apply?" has little to do with 'this', and more to do with what's the most convenient way to pass arguments into the original function: comma separated list (call) or an array (apply) ?

// bind does not invoke the original function immediately
// instead, bind returns a new function, with a forced value for this.

var bob = {
    name : 'bob'
}

// sayHello.bind() returns a new function, similar to sayHello, except that 'this' is permanently set to 'bob'.
var bobSaysHi = sayHello.bind(bob)

// console.log(bobSaysHi)
//bobSaysHi()


var carlos = {
    name : 'carlos'
}

var carlosIsHappyToMeetYou = sayHello.bind(carlos, true)

//carlosIsHappyToMeetYou()


var alice = {
    name : 'alice',
    lazyGreeting : function(){
        //console.log(this.name)
        // var localFunc = (function(){
        //     console.log(this.name)
        // }).bind(this)
        var originalFunc = function(){
            console.log(this.name)
        }
        var boundFunc = originalFunc.bind(this)
        // localFunc is 
        localFunc()

    } 
}

alice.lazyGreeting()

