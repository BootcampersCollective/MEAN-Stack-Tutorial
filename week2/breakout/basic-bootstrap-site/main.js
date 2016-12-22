var noSwearingInput = document.querySelector('.no-swearing')

// the event listener takes a callback function. I define this function, but I never call it myself. the browser will call it for me when this event happens, and pass in an event object with relevant information
var bannedWords = [
    'eff-word',
    'ess-word',
]

noSwearingInput.addEventListener('keyup', function(event){
    console.log(event.target.value)
    console.log(event)
    //prevent default behavior for this event
    var wordArray = event.target.value.split(' ')

    for ( var i = 0; i < wordArray.length; i++ ) {
        if ( bannedWords.indexOf(wordArray[i]) != -1 ) {
                wordArray[i] = ''
        }
    }
    wordString = wordArray.join(' ')

    event.target.value = wordString

})

// this can prevent a lot of keyboard shortcuts. don't do this!
// document.addEventListener('keydown', function(event){
//     if ( event.key === ' ' ){
//         event.preventDefault()
//
//     }
// })

document.querySelector('.outer').addEventListener('click', function(event){
    console.log(event)
    console.log('clicked the outer element')
})
document.querySelector('.inner').addEventListener('click', function(event){
    console.log('clicked the inner element')
    event.stopPropagation()
})


document.addEventListener('myCustomEvent', function(event){

})

var people = ['steve', 'jeph', 'connor', 'alice']

var findSteve = function(){
    for ( var i = 0; i < people.length; i++ ) {
        if (people[i] === 'steve') {
            return people[i]
        }
    }
}

var doTheFirstThing = function(){}
var doTheNextThing = function(){}
var thisIsTheSpecialCase = function(){}
var doTheSpecialThing = function(){}

doTheFirstThing();
doTheNextThing()
if ( thisIsTheSpecialCase()){
    doTheSpecialThing()
}

//using lots of custom events can be referred to as 'Publish/Subscribe' aka pub/sub
var capitalizeWords = function(element){
    return element.toUpperCase()
}

var addExcitment = function(element){
    return element + '!!!'
}

var words = ['hi', 'bye', 'whatever']
// this code is more readable because I use verbs for my functions, and plural nouns for arrays
var cappedExcitedWords = words.map(capitalizeWords).map(addExcitment)
