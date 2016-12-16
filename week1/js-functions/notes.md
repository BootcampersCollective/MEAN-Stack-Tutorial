# Javascript Functions
A function is a reusable block of code ( set of instructions ) that takes inputs, and produces outputs
A Function is another non-primitive variable type in JavaScript.

Have 4 components:
- reserved word `function` or fat arrow
- name (optional)
- set of parameters/arguments
- set of statements - body of the function

## EC5 syntax

### Named function
```javascript
// named function declaration
// it can be called/invoked **anywhere** in the file since it's declared at compile time
function calculateArea(length, height) {  // inputs are called parameters
    var area = length * height;
    return area;  // return will give a value back after invoking the function
}  // named functions do not expect a semicolon after the body
```

### Anonymous function

```javascript
// define an anonymous function and assign it to a variable
// you can only invoke the function **after** it's declaration
var calculateArea = function(length, width) {  // inputs are called parameters
    var area = length * height;
    return area;  // return will give a value back after invoking the function
}  // assignments do not expect a semicolon, so a function defined this way do not need a semicolon
```

## EC 6 (2016, increasingly supported by browsers but not fully supported yet, but is supported by node (server-side_))

```javascript
// the function keyword before the parameter list is replaced by 
// a "fat arrow" (=>) after the parameter list
calculateArea(length, height) => {  // inputs are called parameters
    var area = length * height;
    return area;  // return will give a value back after invoking the function
};   // EC6 style named functions expect a semicolon after the body

// this is the assignment of an anonymous function declaration in ES6 format
var calculateArea = (width, height) => {
    var area = width * height;
    return area;
} // functions defined this way do not expect a semicolon
```

## Invoking a Function
We use terms like `calling`, `invoking` or `executing` a function to say that a function is run.

```javascript
// sometimes we want to capture the result/return value of the function
var squareArea = calculateArea(2,4.5);
// sometimes we want the function to do something and don't care about a return value
saveToDatabase(myValue);

// Speaking in code: declare a variable square and assign it to the result of invoking the calculateArea function with the arguments 4 and 4
var square = calculateArea(4,4);
console.log('Square area ===', square); // Square area === 16
```

## A Function Call vs. a Function Reference
A function is called, executed or invoked by passing it a set of arguments in parenthesis.

```javascript
calculateArea(1, 2);
```

A function reference without parenthesis is not run, but just passed on to be called later.

```javascript
// define a named function
function calculateArea(width, height) {
    return width * height;
}
// define a named function that calls another named function
function triangle(b,h) {
    return calculateArea(b,h)/2;
}

// log the result of calling the function
console.log("Triangle ===", triangle(4,3))          // Triangle = 6
// log the function reference
console.log("Triangle reference ===", triangle)     // Triangle reference === function triangle(b,h) { return calculateArea1(b,h)/2; }

// create a function that will call a function reference passed in as a parameter
function callIt(a,b,func) {
    var result = func(a,b);  // this will invoke the function func when callIt is invoked
    return result;    // call the function func which is passed in with the given arguments a and b
}

var tri = callIt(4,5,triangle)             // invoke callIt() with the function triangle and 4 and 5
console.log("Triangle 4,5 ===", tri)       // Triangle 4,5 === 10
var quad = callIt(4,5,calculateArea)       // invoke callIt() with the function calculateArea and 4 and 5
console.log("Quadrangle 4,5 ===", quad)    // Quadrangle 4,5 === 20
```

## Methods
 A method is a function that is defined within an object (as a property of that object).

```javascript
// define an object
var bear = {
   // eat is both a function and a property of the bear object,
   // therefore it is also called a method
   eat: function(food) {
      console.log('Bear is nom nom nomming on:', food);
   },
   // same for maul
   maul: function(entity) {
      console.log('Bear is mauling:', entity);
   }
}

// speaking in code: invoke the `eat` method on the `bear`
// object and pass the String 'salmon' as an argument.
bear.eat('salmon');

// speaking in code: invoke the maul method on the `bear`
// object and pass the String 'your face' as an argument.
bear.maul('your face');

```
## Built-in Functions/Methods
Almost every variable type in JavaScript is ultimately an Object, which means most things that can be assigned to a variable in JavaScript will have properties and methods. This includes `Strings`, `Numbers`, `Arrays`, `Functions`, `Objects`, and even `Booleans`.

```javascript
var hi = 'hello!'
console.log(hi.toUpperCase())  // HELLO!
console.log('howdy'.toUpperCase())  // this also works - just attach the method to the string literal

var weekString = 'Monday Tuesday Wednesday Thursday Friday Saturday Sunday';
// delimeter is a term for a separator, a character or string of characters that separate chunks within a string
var delimeter = ' ';
var weekArray = weekString.split(delimeter); // creates an array of strings split by the given delimeter
console.log(weekArray);  // ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']

weekString = weekArray.join(','); // join will create a string from an array with the given delimeter
console.log(weekString); // 'Monday,Tuesday,Wednesday,Thursday,Friday,Saturday,Sunday
```

## Functional Scope

```javascript
var globalVar = 'global';

function myFunction() {
    // this variable is 'declared' by using the 'var' keyword
    // it is defined by assigning it a value
    var localVar = 'local to my function';

    // this variable is defined, but never explicitly declared
    leakingVar = 'this variable will "leak" into the global scope

    console.log(globalVar);
    console.log(leakingVar);
}

console.log(localVar);  // undefined
console.log(leakingVar); // this will "leak" into the global scope and be available outside the function
console.log(globalVar); // works just fine
```

## Variable/Function Naming Conventions
- lowercase
- UPPERCASE
- snake_case
- CamelCase

### RefactorU Convention (feel free to define your own convention)
- local variables and functions use camel case, starting with a lower case letter (myVariable)
- modules and more significant objects use camel case, starting with an upper case letter (Module1)
- global variables or special objects will be in upper case (GLOBAL_PORT)

## Resources
For more on functions, check out [MDN | Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions)