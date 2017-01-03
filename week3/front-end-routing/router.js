// here, we get a reference to our angular module and attach a router
angular.module('CoffeeApp')
    .config(Router)

// we inject this dependency from the ngRoute module that we included in our app
// see https://docs.angularjs.org/api/ngRoute for documentation on routeProvider and such
Router.$inject = ['$routeProvider']

function Router($routeProvider) {

    // console.log('Router loaded')

    // using the routeProvider...
    $routeProvider
    // chain on a route which will define the html template to insert in the ng-view when that route is hit
    .when('/',{
        templateUrl: '/templates/home.html'
    })
    .when('/menu', {
        templateUrl: '/templates/menu.html'
    })
    // you can also add a controller using the 'controller as' syntax which will govern that html template
    .when('/origin', {
        templateUrl: '/templates/origins.html',
        controller: 'OriginControl as oCtl'
    })
    // and like an 'if' statement, this is our 'else' - where to go if a bogus route is entered.
    .otherwise( { redirectTo:'/'} )
}
