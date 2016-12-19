# Functional Programming

Warm up Exercise

Create an index.html and a main.js so that the main.js can log something
to the console when the webpage is loaded.

Three ways to run javascript code:
1. Create an html file that sources the script and then load that html in a browser
2. Run it using node directly (using the REPL)
3. Create a snippet in devtools and run it interactively

## What is Functional Programming?

### Functional Programming Concepts

### Immutable
Data inputs don't change.  Create new data objects to return with modifications rather than modifying the original input data.

Create an array and capitalize all of the elements in that array.

```javascript
var students = ['tyson', 'rob', 'sean', 'charlie', 'anthony']

// this is not immutable
function capIt(words) {
    for (var i=0; i<words.length; i++) {
        words[i] = words[i].toUpperCase();
    }
    return words;  // the words array has been modified
}
//var newWords = capIt(words);  // so now, newWords AND words are capitalized.

// this version IS immutable!
// this does not affect the input (words) and gives us a new output, so this is immutable
function capItAgain(words) {
    var wordsAgain = [];  // start with a new empty array

    for (var i=0; i < words.length; i++) {
        wordsAgain.push(words[i].toUpperCase());  // add new capitalized words to the array one by one
    }
    return wordsAgain;  // return a NEW array of captilized words
}

// capItAgain IS immutable, so now students has not been modified and capWords is all capitalized
var capWords = capItAgain(students)
```


### Composable
Form larger complex operations from smaller, discrete functions that can be reused.

We want to capitalize the first letter of every name in an array.

```javascript
var kungFury = ['tiger', 'mantis', 'panda', 'crane', 'turtle']

// this method will capitalize the first letter of each name in an array
// this method works, but it is not very 'composable' or reusable
function capFirstLetter(arr) {
    var newArr = [];
    for(var i = 0;i < arr.length;i++) {
        var name = kungFury[i];
        newArr.push(kungFury[i][0].toUpperCase() + kungFury.substring(1))
    }
    return newArr
}
var newArrayOfNames = capFirstLetter(kungFury)
```
This first method works, but it is not very reusable.  
What if I want also want to capitalize the whole name?  Or to capitalize the first word in every sentence?
It is not very composable. 

We want to separate the iteration over the array from the operation on the element of the array.

That's what array.map() does!

```javascript
// Map Method
// create one function that just capitalizes the first letter of a given word
var capName = function(el, index) {
    // el.substring(0,1)  - this is another way to grab that first letter
    // el.charAt(0)   - and another way...
    return el[0].toUpperCase() + el.substring(1);
}
```

### Pure Function
Doesn't affect variables outside of itself.  
Doesn't depend on anything other than the arguments that are passed in.

```javascript
var i = 0;
// this is NOT a pure function.  It modifies i, which is outside of the function's local scope
function oneMore() {
    console.log(i++)  // this changes the value of i, which was not passed in as an argument.
}
```

```javascript
var i = 0;
// this IS a pure function.  It does not modify i.  It only modifies j, which is local to the function.
function oneMore(i) {
    var j = i + 1;
    console.log(j)  // this does not change the value of anything outside of this function.
}
```


### Higher Order Function
Functions that take other functions (callbacks) as arguments or return functions.

```javascript
function callback() {
    // do my callback stuff
}

function higherOrder(callback) {
    // some some higher order stuff and then call my callback
    callback();
}
```
