// // ----------------
// // ES5
// // ----------------

// // First we need to make a SUPER class

// function Wizard (wizardInfo){
//     // console.log("Info : ", wizardInfo);
    // this.name = wizardInfo.name;
    // this.staffType = wizardInfo.staffType;
    // this.magicSpells = wizardInfo.magicSpells;
    // this.age = wizardInfo.age;

// }

// // Wizard() // need a return statement to get values out of a function - `this` refers to host object
// // new Wizard() // `this` becomes an empty object and is automatically returned at the end of the function

// var cedrick = new Wizard({
//     name : "Cedrick",
//     staffType : "Crystal Ball",
//     magicSpells : [
//         "Use the Crystal Ball",
//         "Newt Transformation"
//     ],
//     age : 506
// });

// var gandalf = new Wizard({
//     name : "Gandalf",
//     staffType : "Wood Staff",
//     magicSpells : [
//         "Fall off a bridge",
//         "Appear dramatically"
//     ],
//     age : 3000
// });

// Wizard.prototype.castSpell = function (spellIndex){
//     return this.name + " casts " + this.magicSpells[spellIndex]
// }

// // ------------------------------------------

// function Artificier (artInfo){
//     var artificerObj = this;
//     // We can use the `call` method to save ourselves code and use a function that already exists
//     Wizard.call(artificerObj, artInfo); // we are passing the `this` object that represents our new artificer

//     // unique property to artificiers
//     artificerObj.craftingAbility = artInfo.craftingAbility;

// }

// // We need to set up the inheritance
// Artificier.prototype = Object.create(Wizard.prototype);
// // Reset the constructor
// Artificier.prototype.constructor = Artificier;

// Artificier.prototype.makeThing = function(){
//     return this.name + " makes " + this.craftingAbility
// }

// var leon = new Artificier({
//     name : "Leon",
//     staffType : "Stone Staff",
//     magicSpells : [
//         "Summon Bonk II",
//         "Make Stuff"
//     ],
//     age : 80,
//     craftingAbility : "Stone Golem",
// });

// -------------------------
// ES6
// -------------------------

// Wizard Superclass
class Wizard {
    constructor(wizardInfo){
        this.name = wizardInfo.name;
        this.staffType = wizardInfo.staffType;
        this.magicSpells = wizardInfo.magicSpells;
        this.age = wizardInfo.age;
    }

    castSpell(spellIndex){
        return this.name + " casts " + this.magicSpells[spellIndex]
    }
}

// Artificer Subclass

class Artificier extends Wizard{
    constructor(artInfo){
        super(artInfo);
        this.craftingAbility = artInfo.craftingAbility;
    }

    makeThing(){
        return this.name + " makes " + this.craftingAbility
    }

    castSpell(spellIndex){
        return super.castSpell(spellIndex) + ".  It was really artificery"
    }
}



// -- Instances

var cedrick = new Wizard({
    name : "Cedrick",
    staffType : "Crystal Ball",
    magicSpells : [
        "Use the Crystal Ball",
        "Newt Transformation"
    ],
    age : 506
});

var gandalf = new Wizard({
    name : "Gandalf",
    staffType : "Wood Staff",
    magicSpells : [
        "Fall off a bridge",
        "Appear dramatically"
    ],
    age : 3000
});

var leon = new Artificier({
    name : "Leon",
    staffType : "Stone Staff",
    magicSpells : [
        "Summon Bonk II",
        "Make Stuff"
    ],
    age : 80,
    craftingAbility : "Stone Golem",
});