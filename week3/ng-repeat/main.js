angular.module('worldGeographyApp', [])
    .controller('worldPlaces', worldFunction)

function worldFunction() {
    var mapCtl = this;

    // start with a simple variable that we can use in our html
    mapCtl.title = "Map of the World";

    // create a list of names
    mapCtl.countries = [
        'USA',
        'Texas',
        'Zimbabwe',
        'India',
        'China',
        'Mars'
    ]

    mapCtl.countriesWithDupes = [
        'USA',
        'Texas',
        'Texas',
        'Zimbabwe',
        'India',
        'China',
        'Texas',
        'Mars'
    ]

    // this variable is local to this controller and can't be accessed outside of this function
    // so the html can't get at it
    var growing = 5876123

    // we can also ng-repeat over arrays of objects, arrays of arrays, etc.
    mapCtl.countryObjects = [
        {
            name: 'USA',
            population: 13473463,
            motto: "We're Yuuuuge!"
        },
        {
            name: 'Texas',
            population: growing,    // we can use local variables within objects that will be made visible to the html
            motto: "Don't mess with Texas"
        },
        {
            name: 'India',
            population: 1300000000,
            motto: "Namaste and bring on the samosas"
        },
        {
            name: 'China',
            population: 6,
            motto: "Made here"
        },
    ]

    mapCtl.sortedCountries = mapCtl.countries.sort()

    // let's add a modal to determine the style we will apply to the list
    mapCtl.style = true;

    // for each element in the list, if it is clicked, log some info to the console
    mapCtl.logMotto = function (index, country) {
        console.log(index, " our motto is", country.motto)
        mapCtl.style = !mapCtl.style
    }
}
