// create angular app
angular.module('aliensApp', [])
    .controller('aliensController', aliensFunction);

function aliensFunction() {
    var aCtrl = this;  // we could use $scope instead if we wanted to

    console.log('aliensController loaded');

    aCtrl.title = 'Take us to your leader.'

    // create a temporary database of aliens
    aCtrl.aliens = [
        {
            name: 'Predator',
            color: 'camo',
            numEyes: 2,
            planetOfOrigin: 'Yautja Prime',
            numArms: 2
        },
        {
            name: 'Tom Cruise',
            color: 'white',
            numEyes: 2,
            planetOfOrigin: 'Unknown',
            numArms: 2
        },
        {
            name: 'Angular',
            color: 'black',
            numEyes: 6,
            planetOfOrigin: 'Hell',
            numArms: 50
        },
        {
            name: 'Raphael',
            color: 'ghost white',
            numEyes: 4,
            planetOfOrigin: 'Mars',
            numArms: 10
        }
    ];

}