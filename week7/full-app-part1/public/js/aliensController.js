// reference our angular app
// without the dependency injection array, we are just referring to the app.  we aren't creating it.
angular.module('aliensApp')
    .controller('aliensController', aliensFunction);

// inject all of our dependencies into this controller
aliensFunction.$inject = ['aliensFactory']

// we pass all of our injected dependencies in as arguments
function aliensFunction(aliensFactory) {
    var aCtrl = this;  // we could use $scope instead if we wanted to

    // quick check to make sure our controller is loading.
    console.log('aliensController loaded');

    // simple test variable to make sure our controller variables are accessible to the html
    aCtrl.title = 'Take us to your leader.'

    // get our list of aliens from the aliens factory
    aCtrl.aliens = aliensFactory.getAliens();

    // submit a new alien to be added to the list of aliens
    // we pass the event from which this function is called, but we aren't 
    // really doing anything with the event.
    aCtrl.submit = function(event) {
        // take a look at what's in the event
        // console.log(event)
        // var newAlien = {}
        // var newAlien = aCtrl.alien
        aliensFactory.addAlien(aCtrl.alien);
        // after adding, we set the alien to be an empty object to clear the input fields
        // in our input form
        aCtrl.alien = {}
    }
}