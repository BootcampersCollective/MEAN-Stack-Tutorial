angular.module('CoffeeApp')
    .controller('CoffeeControl', coffeeController)

function coffeeController() {
    var cCtl = this;

    // a home page welcome message
    cCtl.welcome = "Welcome to the RU Coffee Shop"

    // a menu list of coffees
    cCtl.coffees = [
        {
            name: 'Espresso',
            price:2
        },
        {
            name: 'Cappacino',
            price: 8
        },
        {
            name: 'Goat Coffee',
            price: 15
        }
    ]

}