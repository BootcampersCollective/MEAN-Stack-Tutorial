// Triple Five
console.log('\nTriple Five')
console.log('Version 1')
var tripleFive = function () {
    for (var i=0;i<3;i++) {
        console.log('Five!');
    }
}
tripleFive();

console.log('Version 2')
var output = '';
var tripleFive2 = function() {
    for (var i=0;i<3;i++) {
        output += 'Five! ';
    }
    console.log(output);
}
tripleFive2();

// Last Letter
console.log('\nLast Letter')
var lastLetter = function(str){
    console.log('Last letter of '+str+' is '+str.charAt(str.length - 1))
    console.log('Last letter of '+str+' is '+str.slice(-1))
    console.log('Last letter of '+str+' is '+str.substr(str.length - 1,1))
}
lastLetter('hello')

// Square
console.log('Square')
var square = function(number) {
    return number * number;
}
console.log('the square of 2 is ' + square(2));

var square = function(number1, number2) {
    var n1 = number1 * number2;
    console.log(number1+'*'+number2+'='+n1)
}
square(3,3)

// Negate
console.log('Negate')
function negate(number) {
    return number * -1;
}
console.log("negate 2 becomes "+negate(2));

// ToArray
console.log('\ntoArray')
var toArray = function (a,b,c) {
    return [a,b,c];
}
console.log("to array "+toArray(1,4,5));

var toArray2 = function (a,b,c) {
    var myArr = [];
    myArr.push(a,b,c)
    return myArr;
}
console.log("to array2 "+toArray2(1,4,5));

var toArray3 = function () {
    var myArr = [];
    for (var i=0;i<arguments.length;i++){
        myArr.push(arguments[i])
    }
    return myArr;
}
console.log("to array3 "+toArray3(1,4,5));

// Starts with A
console.log('\nStarts with A')
function firstA(string) {
    first = string[0].toUpperCase();
    if (first === 'A') {
        return true
    } else {
        return false
    }
}

var firstA2 = function(string) {
    if (string[0] === 'a' || string[0] === 'A') {
        return true
    } else {
        return false
    }
}

var firstA3 = function(string) {
    var isIt = string[0].toUpperCase() === 'A' ? true : false;
    return isIt;
}

var firstA4 = function(string) {
    // test to see if the first character is A or a
    return string[0] === 'a' || string[0] === 'A';
}
console.log("Aardvark starts with A? "+firstA('Aardvark'))
console.log("Bear starts with A? "+firstA('Bear'))

// Excite
console.log('\nExcite')
var excite = function(exclaim) {
    console.log(exclaim + '!!!');
}
excite('yes');
excite('go');

// Sun Exercise
console.log('\nSun Exercise')
var sun = function(str) {
    var result = str.indexOf('sun');
    if(result !== -1) {
        return true
    } else {
        return false
    }
}
var sun2 = function(str) {
    return str.indexOf('sun') !== -1;
}
var sun3 = function(name) {
    return name.includes('sun');
}
console.log(sun2('sundries'))
console.log(sun2('asunder'))
console.log(sun2('catapult'))

// Tiny
console.log('\nTiny')
var tiny = function(number) {
    return number >= 0 && number <= 1;
}
console.log(tiny(0.3))
console.log(tiny(14))
console.log(tiny(-5))

// getSeconds
console.log('\nGet Seconds')
// expects a string like ##:##  (minuts and seconds)
var getSeconds = function (string) {
    var splitted = string.split(':');
    // convert strings in array to numbers using the + sign and add them
    var result = +splitted[0]*60 + +splitted[1];
    return result;
}
console.log("getSeconds 22:33 " + getSeconds('22:33'))

var time = function(timeString){
    // add minute tens*10 to minutes*60 
    return((timeString[0]*600) + (timeString[1]*60) 
             + (timeString[3]*10) + (timeString[4]*1))
}

console.log("time of 22:33 " + time('22:33'))