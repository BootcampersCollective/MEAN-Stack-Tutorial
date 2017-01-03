angular.module('CoffeeApp')
    .controller('OriginControl', originController)

function originController() {
    var oCtl = this;

    // a home page welcome message
    oCtl.welcome = "Welcome to the RU Coffee Shop"

    // a menu list of coffees
    oCtl.origins = [
        {
            name: 'Espresso',
            location: 'The top of the highest peak in Columbia'
        },
        {
            name: 'Cappacino',
            location: "The basement of some random Italian's restaurant"
        },
        {
            name: 'Goat Coffee',
            location: "Africa.  Just Africa"
        }
    ]

}