// Object oriented programming

// what is 'this'? it's a variable, but its value changes dynamically
// normally, 'this' refers to the object that the function is attached to. the "host object"
// if the function is not attached to any particular object, then 'this' refers to the global object (in browsers, this is the window)

var whoAmI = function(){
    console.log(this.name)
}
// whoAmI()

var alice = {
    name : 'alice',
    whoAmI : whoAmI
}
// 'this' is context sensitive. just like the pronoun "I" depends on who says it.
// alice.whoAmI()

var outer = {
    name : 'outer',
    whoAmI : whoAmI,
    inner : {
        name : 'inner',
        whoAmI : whoAmI
    }
}

// outer.whoAmI()
// outer.inner.whoAmI()
////////////

// OOP lets us define CLASSES, which is like a blueprint (or a factory) for making objects.
// Individual objects that are created from that blueprint are called INSTANCES of that class.
// The process of making instances is called INSTANTIATION

var Cat = function(name, species, angerLevel, meow, looks){
    // since we will invoke this function with 'new', this will be an empty object, which is automatically returned
    // var this = {}. 'this' no longer cares what object this function is attached to
    this.name = name
    this.species = species 
    this. angerLevel = angerLevel
    this.meow = meow
    this.looks = looks

    // this technically works, but it's not efficient if we have 1000's of cats
    // this.yell = function(){
    //     console.log(this.name + " says " + meow + ".")
    // }
        
    // return this
}
Cat.prototype.yell = function(){
    console.log(this.name + " says " + this.meow + ".")
}
// In javascript, every function has a prototype 

// invoking this function with the 'new' keyword makes this function behave like a constructor function.
var felix = new Cat('felix', 'cartoon', 4, 'me-OW', 'tuxedo')
console.log(felix)
// console.log(Cat.prototype)


// Cat.prototype.yell() // you would never call a method directly off the prototype
felix.yell()

