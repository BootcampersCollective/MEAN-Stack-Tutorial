// This is the syntax I used earlier to create a controller using the global $scope

// angular.module('myApp', [])
//   .controller('myController', controllerFunction)
//
// // inject the $scope into our controller
// contollerFunction.$inject = ['$scope']
//
// // and then pass that injected dependency into our controller as a parameter
// function controllerFunction($scope) {
//     $scope.title = "The Title";
// }

// instead, we will more typically use the named scope by setting a controller variable for 'this'
// and then using the 'controller as' syntax in our html

// create our angular module (AKA app)
angular.module('myApp', [])
    // chain on a controller called myController
  .controller('myController', controllerFunction)

// no need to inject the global $scope or any other dependencies at this point

// define the controller named controllerFunction
function controllerFunction() {
    // create a variable alias for this
    var myCtl = this;
    myCtl.title = "The Avengers";
    // create an array of strings that we will present in a list
    // we can do this here in the javascript, or in the html using the ng-init directive
    // myCtl.heroes = ['Spandex Man', 'Quailman', 'Chicken Man', 'The Tick']

    // create a function to serve as the event handler for the Add Hero button on our html page
    myCtl.addHero = function() {
        // immediately after pushing the new hero's name onto our list of hero names
        // it is displayed in the the ng-repeat list element on the html page
        myCtl.heroes.push(myCtl.hero)
    }
}
