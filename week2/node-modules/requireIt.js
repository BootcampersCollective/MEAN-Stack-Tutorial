// here we are requiring the object that we defined in the file requireMe.js
var boy = require('./requireMe.js')

// and we can then use that object normally as if it was defined in this file
console.log("the boy's name is "+boy.name+' and he is '+ boy.age+ ' years old')