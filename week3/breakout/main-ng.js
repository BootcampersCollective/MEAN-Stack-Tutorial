//angular.module('exerciseApp',[])  // 'setting the module'
// versus
//angular.module('exerciseApp')  // 'getting the module'

angular.module('exerciseApp',[])  
    .controller('fitnessController', fitMeFunc)

// create the angular controller
function fitMeFunc() {
    var fitCtl = this

    fitCtl.greeting = 'Welcome to the Gym'

    fitCtl.exercises = [
        {
            name: 'push-ups',
            caloriesBurned: 2,
            coolness: 8,
            reps: 30, 
            class:'plain'
        },
        {
            name: 'burpies',
            caloriesBurned: 5,
            coolness: 2,
            reps: 15, 
            class:'plain'
        },
        {
            name: 'jumping jacks',
            caloriesBurned: 1,
            coolness: 0,
            reps: 250, 
            class:'plain'
        },
        {
            name: 'dead lift',
            caloriesBurned: 15,
            coolness: 6,
            reps: 12, 
            class:'plain'
        }
    ]

    // create a function to expand the number of exclamation marks based
    // on the coolness factor
    fitCtl.coolnessThing = function(coolness) {
        var thing = ''
        for (var i=0 ; i< coolness; i++) {
            thing += '!'
        }
        return thing
    }

    // add and event handler for when a list item is clicked
    fitCtl.clicked = function (index) {
        console.log("Exercise #"+index+" clicked")
        fitCtl.exercises[index].class = 'fancy'
    }
}