angular.module('aliensApp')
    .factory('aliensFactory', aliensFactoryFunction);

function aliensFactoryFunction() {
    // create a temporary database of aliens
    // this is not returned, so it remains private to our factory file.
    // eventually, we will remove this and use a database for this data.
    var aliens = [
        {
            name: 'Predator',
            color: 'camo',
            numEyes: 2,
            planetOfOrigin: 'Yautja Prime',
            numArms: 2,
            powers: ['bad hair', 'mayhem', 'nuke strike']
        },
        {
            name: 'Tom Cruise',
            color: 'white',
            numEyes: 2,
            planetOfOrigin: 'Unknown',
            numArms: 2,
            powers: ['self-absorption', 'laser beams', 'danger']
        },
        {
            name: 'Angular',
            color: 'black',
            numEyes: 6,
            planetOfOrigin: 'Hell',
            numArms: 50,
            powers: ['ruins everything', 'makes people mindless', 'slow digestion']
        },
        {
            name: 'Raphael',
            color: 'ghost white',
            numEyes: 4,
            planetOfOrigin: 'Mars',
            numArms: 10,
            powers: ['super smartikins', 'fixes code', 'woo wooooos the women']
        }
    ];

    // Get the list of all of our aliens
    function getAllAliens() {
        return aliens;
    }

    // Add a new alien to our list of aliens
    function createAliens(alien) {
        aliens.push(alien)
    }

    // a Factory is a function, so here we return the things that we want to 
    // be visible and share between Controllers
    return {
        getAliens: getAllAliens,
        addAlien: createAliens
    }
}