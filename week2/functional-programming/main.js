// here is a simple command to show how this javascript file can be run from an html page load
var response = prompt('how are you doing?')
console.log(response)


// Immutability
// let's create an array and capitalize all of the elements in that array
var students = ['tyson', 'rob', 'sean', 'charlie', 'anthony']

// this is not immutable
function capIt(words) {
    for (var i=0; i<words.length; i++) {
        words[i] = words[i].toUpperCase();
    }
    return words;  // the words array has been modified
}
//var newWords = capIt(words);  // so now, newWords AND words are capitalized.

// this tries to be immutable, but has a failing...
function capItDifferently(words) {
    var wordsAgain = words;  // this creates a new reference to the SAME value
    // there is an unintended side effect
    // when I modify the value of wordsAgain, it is the SAME value that words points to, so words is changed as well
    for (var i=0; i < wordsAgain.length; i++) {
        wordsAgain[i] = wordsAgain[i].toUpperCase(); // this modifies words[i] as well 
    }
    return wordsAgain;
}

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


// Let's look at some built in methods for the Array object

// Composability
// create an array
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

// Map Method
// instead, we want to create one function that just capitalizes the first letter of a given word
var capName = function(el, index) {
    // el.substring(0,1)  - this is another way to grab that first letter
    // el.charAt(0)   - and another way...
    return el[0].toUpperCase() + el.substring(1);
}

// map applies the given callback function to each element in the array 
// that it is called on
// so this will apply that capName function to capitalize the first letter of each name in the array
var capNameArr = kungArray.map(capName)

// Filter Method
var cast = [
        {
            name : 'Po',
            actor : 'Jack Black',
            primary : true
        },
        {
            name : 'Po\'s Dad',
            actor : 'James Hong',
            primary : false
        },
        {
            name : 'Crane',
            actor : 'David Cross',
            primary : true
        }
    ]

// array.filter takes a callback that takes as an argument an array element
// and it will remove that element from the filtered array result if the
// callback method returns false.
// if the callback returns true, the element from the original array is added
// to the filtered array.
 var filteredCast = cast.filter(function(actor){
     return actor.primary;
 })

// array.map() returns a single value after using a callback to process
// each element of the array
var wallet = 1000
var purchases = [10, 13, 15.66, 333.55]

// array.map() takes two arguments - a callback and an initial value.
// the callback is given two arguments - the consolidator (runningTotal) and the array element (purchase)
var whatsLeft = purchases.reduce(function(runningTotal, purchase){
    console.log('current total=', runningTotal)
    console.log('purchase = ', purchase)
    console.log('------')
    return runningTotal -= purchase;
}, wallet)
