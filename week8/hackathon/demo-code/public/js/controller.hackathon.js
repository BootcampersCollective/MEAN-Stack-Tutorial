angular.module('Hackathon')
    .controller('homeCtrl', hControl)
    
hControl.$inject = ['hackFact'];

function hControl(hackFact) {
    var hCtrl = this;
    hCtrl.greeting = "GET YOUR HACK ON!"
    
}