angular.module('aliensApp')
    .factory('aliensFactory', aliensFactoryFunction);

aliensFactoryFunction.$inject = ['$http']
function aliensFactoryFunction($http) {
    // create a temporary database of aliens
    // this is not returned, so it remains private to our factory file.
    // eventually, we will remove this and use a database for this data.
    // var aliens = [
    //     {
    //         name: 'Predator',
    //         color: 'camo',
    //         numEyes: 2,
    //         planetOfOrigin: 'Yautja Prime',
    //         numArms: 2,
    //         powers: ['bad hair', 'mayhem', 'nuke strike']
    //     },
    //     {
    //         name: 'Tom Cruise',
    //         color: 'white',
    //         numEyes: 2,
    //         planetOfOrigin: 'Unknown',
    //         numArms: 2,
    //         powers: ['self-absorption', 'laser beams', 'danger']
    //     },
    //     {
    //         name: 'Angular',
    //         color: 'black',
    //         numEyes: 6,
    //         planetOfOrigin: 'Hell',
    //         numArms: 50,
    //         powers: ['ruins everything', 'makes people mindless', 'slow digestion']
    //     },
    //     {
    //         name: 'Raphael',
    //         color: 'ghost white',
    //         numEyes: 4,
    //         planetOfOrigin: 'Mars',
    //         numArms: 10,
    //         powers: ['super smartikins', 'fixes code', 'woo wooooos the women']
    //     }
    // ];

    // Get the list of all of our aliens
    function getAllAliens() {
        // return aliens;
        // http.get returns the Promise for the asynchronous http request
        // we want to use the data from the successful promise in our controller,
        // but we can't return it from inside the promise, so we return the whole promise to the controller.
        return $http.get('/aliens');
        
    }

    // Add a new alien to our list of aliens
    function createAliens(alien) {

        // aliens.push(alien
        console.log('createAlien:', alien)
        // in this case, since we don't really care about what was returned in the response,
        // we can process the promise here.  To be consistent, we probably should return the 
        // promise here and have the controller handle it as well, but 
        return $http.post('/alien', alien)
            
    }

    // a Factory is a function, so here we return the things that we want to 
    // be visible and share between Controllers
    return {
        getAliens: getAllAliens,
        addAlien: createAliens
    }
}