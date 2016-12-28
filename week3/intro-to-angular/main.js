// we start by creating our angular module and giving it a name
angular.module('app', [])
    // then we can chain on controllers to handle specific functions
    // the first argument is the name of the controller that we will use in the html
    // and the second argument is the function that defines that controller, found in this file
    .controller('mainController', mainControllerFunction)
    .controller('secondController', secondaryControllerFunction);

// we "inject dependencies into our angular module" setting the $inject property
// to an array of the NAMES of the dependencies (quoted string)
mainControllerFunction.$inject = ['$scope'];

// then those dependencies are passed into the controller function as arguments
function mainControllerFunction($scope) {
    // $scope is the global scope for this controller.  
    // everything in the enclosing html element (ie. body, div, etc) will have
    // access to these variables using the 'double mustache' syntax (ie. {{greeting}})
    $scope.greeting = 'Hello'
    $scope.color = 'red'

    // we can define functions in our controller and call them using the
    // ng-click directive
    $scope.changeGreeting = function() {
        if ($scope.greeting == 'Hello') {
            $scope.greeting = "Goodbye"
            $scope.color = 'blue'
            console.log($scope.visitorName)
        } else {
            $scope.greeting = "Hello"
            $scope.color = 'red'
        }
    }
}

// we can have multiple controllers in the same angular application,
// each with its own scoped are of the html document
function secondaryControllerFunction($scope) {
    $scope.greeting = 'Yo'

    $scope.changeGreeting2 = function() {
        if ($scope.greeting == 'Yo') {
            $scope.greeting = "Later"
        } else {
            $scope.greeting = "Yo"
        }
    }
}
