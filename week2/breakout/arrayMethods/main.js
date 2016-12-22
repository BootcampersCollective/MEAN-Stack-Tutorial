var foods = ['bananas', 'apples', 'potatoes', 'chicken']
// console.log(foods[foods.length-1]) // log the last item of the array, but dont change it
//pop - returns an element from the end of an array, and returns it
var theLastItemFromTheFoodArray = foods.pop()
// console.log(theLastItemFromTheFoodArray) // should log 'chicken'
// console.log(foods) // should log 'bananas', 'apples', 'potatoes'

foods.push('chicken') // adds 'chicken back to the end of the array'

// console.log('=-=-=-=-=-=-=-=')

// console.log(foods)
var firstItemOfTheArray = foods.shift()
// console.log(foods)
// console.log(firstItemOfTheArray)
foods.unshift('bananas')
// console.log(foods)


var numbers = [1,2,3,4,5]

// var otherNumbers = numbers // this doesn't actually copy the array, it creates a second name that refers to the same array.

// console.log(numbers.slice().reverse()) // the slice method lets us quickly copy this array so that we don't have to modify the original numbers array.
// console.log(numbers)

var alice = {name:'alice'}
var bob   = {name:'bob'  }

var people = [alice, bob]
var backwardsPeople = [bob, alice]


// console.log(people)
// console.log(backwardsPeople)
people[0].age = 30
//alice, bob, carlos, dan, eve(eavesdropper), mallory(malicious)
// console.log(people)
// console.log(backwardsPeople)

var carlos = {name : 'carlos'}

var capitalizeName = function(obj){
    // if we don't want to actually modify the input object, we have to create a new object to return
    // return {
    //     name : obj.name.toUpperCase()
    // }
    newObj = {
        name : obj.name.toUpperCase()
    }
    return newObj

}
newObj = capitalizeName(carlos)
// console.log(carlos)

var words = ['This', 'is', 'a', 'sentence.']
var sentence = words.join(' ')
// console.log(sentence)
var wordsAgain = sentence.split(' ')
// console.log(wordsAgain)


var letters = ['a', 'b', 'c', 'd']
var positionOfC = letters.indexOf('c')
// console.log(positionOfC)
var wheresF = letters.indexOf('f')
// console.log(wheresF)

var myArray = []
myArray[2] = 10
myArray[5] = 20
// for (var key in myArray){
//     console.log(key)
// }
// console.log('=-=-=-=-=-=-=')
// for (var i = 0; i < myArray.length; i++ ) {
//     console.log(i)
// }

var alice = {
    name : 'alice',
    age  : 16,
    job  : 'dog walker',
}

for ( var detailAboutAlice in alice ) {
    // console.log(detailAboutAlice)
}

// var hello = 'hello'
// for ( var i = 0; i < hello.length; i++ ) {
//     console.log(hello[i])
// }

var words = ['This', 'is', 'a', 'sentence.']
words.forEach(function(element){
    // console.log(element)
})
/*
map:
    loop over the array,
    apply the callback function to each element of the array
    return some value at the end of the callback
    map returns a new array containing the values returned from the callback

forEach:
    loop over the array,
    apply the callback function to each element of the array
*/

var dogs = ['scruffy', 'fluffy', 'snickers', 'cody']

var s_dogs = dogs.filter(function(element){
    //true or false: does this item belong in the output array?
    if      ( element[0] === 's' ) { return true }
    else if (element[0] !== 's'  ) { return false}
})
// console.log(s_dogs)

var numbers = [1, 5, 9, 10, 11, 14, 22]
// normally, we pass a callback function into sort to describe how we want to sort.
// without a callback, the sort method performs an alphabetical sort
console.log(numbers.slice().sort())

/*
3 possible cases when sorting:
    a should be before b? return a positive number
    b should be before a? return a negative number
    don't care? return 0
*/
console.log(numbers.slice().sort(function(a,b){
    if ( a > b ) { return 1 }
    else if ( b > a ) { return -1 }
    else if ( b === a ) { return 0 }
}))
