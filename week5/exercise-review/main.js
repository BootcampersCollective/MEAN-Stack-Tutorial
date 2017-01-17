// Part I

// Define a constructor for the following object. Add parameters to the constructor for the given properties and add them as instance variables.
// FoodItem
// string name
// number calories
// boolean vegan
// boolean glutenFree
// boolean citrusFree
// Define a stringify method on the constructor's prototype. It should return a string description of the food including its name, calories, and dietary information, formatted as you choose. stringify should not have any side effects. Instantiate three different FoodItems and store each in a separate variable. Call stringify on each instance and print the result to the console.

// create a food item class
function FoodItem(name, calories, vegan, glutenFree, citrusFree) {
    this.name = name;
    this.calories = calories;
    this.vegan = vegan;
    this.glutenFree = glutenFree;
    this.citrusFree = citrusFree;
}

FoodItem.prototype.stringify = function () {
    // we'll use template strings to build our stringification
    // Use ${var} within the back tics and just build up the line
    var result = `${this.name} has ${this.calories} calories and is ${this.vegan ? '' : 'not '}vegan, ${this.glutenFree ? '' : 'not '}gluten free and ${this.citrusFree ? '' : 'not '}citrus free`
    return result;
}

// create some food items
var lemon = new FoodItem('lemon', 67, true, true, false);
var avacado = new FoodItem('avacado', 120, true, true, true);
var beef = new FoodItem('beef', 470, false, true, true);
var bun = new FoodItem('bun', 128, true, false, true);
var lettuce = new FoodItem('lettuce', 1, true, true, true);
var tequilla = new FoodItem('tequilla', 96, true, true, true);
var water = new FoodItem('water', 0, true, true, true);

// check our work with food items...
// stringify some food items (Part 1)
// console.log(lemon.stringify())
// console.log(beef.stringify())
// console.log(water.stringify())


// Part II

// Define constructors for the following objects. Add parameters to the constructor for the given properties and add them as instance variables.
// Drink (same as Plate)
//  string name
//  string description
//  number price
//  Array of FoodItem ingredients
// Plate
//  string name
//  string description
//  number price
//  Array of FoodItem ingredients
// Order
//  Array of Plate plates
// Menu  (same as Order)
//  Array of Plate plates
// Restaurant (simple objet)
//  string name
//  string description
//  Menu menu
// Customer (simple Object)
//  string dietaryPreference
// Define a stringify method on each constructor's prototype. This method should return a string representation of the object, formatted as you choose. stringify should not have any side effects. You may want to reuse the stringify method of the contained objects. (e.g. the Menu object should call stringify on each of its plates to reuse that functionality instead of having to duplicate the code for each plate).
// Add the following methods to the Plate object to determine if all the food items within it fit a specific dietary restriction.
// boolean isVegan
// boolean isGlutenFree
// boolean isCitrusFree
// Instantiate a Burrito Plate, a Guacamole Plate, and a Margarita Drink. (or a Burger and Salad)
// Instantiate a Menu that contains each of the instantiated Plates and Drinks.
// Instantiate a Restaurant that contains the instantiated Menu.
// Call the Restaurant's stringify method to have it print out all its information.


// build up plates from various food items (ingredients) (Part 2)
var Plate = function (name, description, price, ingredients) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.ingredients = ingredients;
}

// create instances of the Plate class
var burger = new Plate('burger', 'a tasty blend of fabulous ingredients', 12, [beef, avacado, bun, lettuce]);
var salad = new Plate('salad', 'plain old salad, avacado, lettuce and lettuce with a citrus dressing', 1.5, [lettuce, avacado, lemon, tequilla])

// a function that returns a boolean is often named "isXXX".  The boolean return value answers the question.
// is our plate vegan?
Plate.prototype.isVegan = function () {
    // for each ingredient...
    // var isVegan = true;  // set our basic assumption
    for (var i = 0; i < this.ingredients.length; i++) {
        // if this ingredient is not vegan, the plate is not vegan
        if (!this.ingredients[i].vegan) {
            // if ANY ingredient is not vegan, the whole plate is not vegan.
            // note that's OK if multiple ingredients set isVegan to false.
            // isVegan = false;  
            return false;
        }
    }
    // if every ingredient was vegan, then the whole plate is vegan
    // return isVegan;  
    return true;
}

// is this plate gluten free...
Plate.prototype.isGlutenFree = function () {
    // for each ingredient...
    for (var i = 0; i < this.ingredients.length; i++) {
        // if this ingredient is not gluten free, the plate is not gluten free
        if (!this.ingredients[i].glutenFree) {
            return false;
        }
    }
    return true;
}

// is this plate citrus free
Plate.prototype.isCitrusFree = function () {
    // for each ingredient...
    for (var i = 0; i < this.ingredients.length; i++) {
        // if this ingredient is not citrus free, the plate is not citrus free
        if (!this.ingredients[i].citrusFree) {
            return false;
        }
    }
    return true;
}

// stringify our plate by stringifying all of the ingredients
Plate.prototype.stringify = function () {
    var result = `${this.name} is ${this.description} that costs \$${this.price} and has the ingredients `
    for (var i = 0; i < this.ingredients.length; i++) {
        result = result + "\n  " + this.ingredients[i].stringify()  // this is like calling burger.stringify(), lettuce.stringify(), etc.
    }
    return result;
}

// check our work with plates...
// console.log(burger)
// console.log('burger')
// console.log('vegan?', burger.isVegan())
// console.log('gluten free?', burger.isGlutenFree())
// console.log('citrus free?', burger.isCitrusFree())
// console.log('salad')
// console.log('vegan?', salad.isVegan())
// console.log('gluten free?', salad.isGlutenFree())
// console.log('citrus free?', salad.isCitrusFree())
//  console.log(burger.stringify())

var Order = function (name, plates) {
    this.name = name;
    this.plates = plates;
}

// is the order vegan?
Order.prototype.isVegan = function () {
    // loop through our plates to see if any are not vegan
    for (i = 0; i < this.plates.length; i++) {
        if (!this.plates[i].isVegan()) {
            return false;
        }
    }
    return true
}

// is the order gluten free?
Order.prototype.isGlutenFree = function () {
    // loop through our plates to see if any are not gluten free
    for (i = 0; i < this.plates.length; i++) {
        if (!this.plates[i].isGlutenFree()) {
            return false;
        }
    }
    return true
}

// is the order citrus free?
Order.prototype.isCitrusFree = function () {
    // loop through our plates to see if any are not citrus free
    for (i = 0; i < this.plates.length; i++) {
        if (!this.plates[i].isCitrusFree()) {
            return false;
        }
    }
    return true
}

// stringify our order by stringifying all of our plates
Order.prototype.stringify = function () {
    var result = `${this.name} `
    // loop through the plates
    for (var i=0; i<this.plates.length; i++) {
        result = result + '\n  ' + this.plates[i].stringify()
    }
    return result
}

// return an array of plate names that are vegan
Order.prototype.showVeganPlates = function () {
    // let's create an array of plate names that are vegan
    var veganPlates = []
    // loop through plates 
    for(var i=0; i<this.plates.length;i++){
        if (this.plates[i].isVegan()) {
            // add this plate to the list of vegan plates if it is vegan
            veganPlates.push(this.plates[i].name)
        }
    }
    return veganPlates
}

// create a and order consisting of a burger plate with a salad
var burgerSpecial = new Order("burger special", [burger, salad]);

// check out work with orders...
// console.log(burgerSpecial)
// console.log('vegan?', burgerSpecial.isVegan())
// console.log('gluten free?', burgerSpecial.isGlutenFree())
// console.log('citrus free?', burgerSpecial.isCitrusFree())
console.log(burgerSpecial.stringify())
console.log('Vegan plates:',burgerSpecial.showVeganPlates())