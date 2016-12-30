// create a local variable to hold our exercises array data
var exercises = [
    {
        name: 'push-ups',
        caloriesBurned: 2,
        coolness: 8,
        reps: 30,
        class: 'plain'
    },
    {
        name: 'burpies',
        caloriesBurned: 5,
        coolness: 2,
        reps: 15,
        class: 'plain'
    },
    {
        name: 'jumping jacks',
        caloriesBurned: 1,
        coolness: 0,
        reps: 250,
        class: 'plain'
    },
    {
        name: 'dead lift',
        caloriesBurned: 15,
        coolness: 6,
        reps: 12,
        class: 'plain'
    }
]

// render() will "nuke and pave" (remove any previous contents and then re-create new contents)
// for our unordered list
// Doing it this imperative way, there is no data binding 
// (which happens naturally using Angular as a declarative strategy)
// so we have to write more code in order for our page to re-render 
// when a data change is made
function render() {
    // iterate over the array using map() and create the text 
    // that we want to see in our list item
    var htmlArray = exercises.map(function (exercise) {
        var thing = coolnessThing(exercise.coolness);
        // backtic (`) will evaluate an expression, ES6 only
        // the 'template' string will evaluate expressions or variables contained within
        // the ${EXPRESSION} 
        var htmlString = `${exercise.name} burns ${exercise.caloriesBurned} calories by doing ${exercise.reps} repetitions ${thing}`
        return htmlString
    })
    // locate our place holder div element within the document
    var exerciseDiv = document.getElementById('exerciseList')
    // first empty the div we will be adding to in order to remove any previous contents
    if (exerciseDiv.children[0]) {
        console.log("removing ul child", exerciseDiv.children[0])
        exerciseDiv.children[0].remove()
    }
    // next we create the unordered list (ul) element
    var ulElement = document.createElement('ul')
    // and for each list item, create an li element and append it to the ul element
    for (var i = 0; i < htmlArray.length; i++) {
        var liElement = document.createElement('li')
        // here we add an event listener on each list item that will change
        // the class when the list item is clicked
        liElement.addEventListener('click', function (event) {
            event.srcElement.classList.add('fancy')
        })
        liElement.innerHTML = htmlArray[i]
        ulElement.appendChild(liElement)
    }
    // and finally, append the unordered list element to the div
    // that we have as our place holder in the document
    exerciseDiv.appendChild(ulElement)
}

// this is identical to the angular function we use for the same purpose
function coolnessThing(coolness) {
    var thing = ''
    for (var i = 0; i < coolness; i++) {
        thing += '!'
    }
    return thing
}

// once that is all done - render what we've created!
render()
