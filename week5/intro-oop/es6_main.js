// OOP with es6 syntax.
// ECMAscript6 

class Cat {
    constructor(name, species, angerLevel, meow, looks){
        this.name = name;
        this.species = species;
        this.angerLevel = angerLevel;
        this.meow = meow;
        this.looks = looks;
    }

    sayMeow() {
        console.log(this.name + " says " + this.meow + ".");
    }
}

var felix = new Cat('felix', 'cartoon', 4, 'me-OW', 'tuxedo')
felix.sayMeow()

