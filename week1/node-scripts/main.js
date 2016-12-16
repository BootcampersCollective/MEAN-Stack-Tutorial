// Let's create a file that we can run in the node REPL.

// Define a couple of shapes

var square = {
    name: 'square',
    length : 5,
    width:3
}
var trapazoid = {
    name: 'trapazoid',
    length : 4,
    width: 72
}

// put the shapes in an array
var shapes = [square, trapazoid]

// here we are defining a named function that calculates the area, given length and width
function area(length, width) {
    return length*width
}

// for each shape in our array...
for (var i = 0; i< shapes.length; i++) {
    // log a sentence describing the shape
    // note that we call the area() function which returns a number
    // which is converted to a string and concatenated to the rest
    // of the string argument which is passed to the console.log function.
    console.log(shapes[i].name+" has a length of "+shapes[i].length
        +" and a width of " + shapes[i].width + ' and an area of ' 
        + area(shapes[i].length, shapes[i].width));
}

var calculateArea2 = (width, height) => {
    var area = width * height;
    return area;
} // functions defined this way do not expect a semicolon