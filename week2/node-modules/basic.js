// We can grab the command line arguments using the built in
// object process, and its property argv
var myArgs = process.argv

// show what the command line arguments look like
// Note that argv[0] is node and argv[1] is this file (basic.js)
console.log(myArgs)

// we can use command line arguments to change runtime behavior without changing the code
var userName = myArgs[4]
console.log("port=",myArgs[2])
console.log("application name =",myArgs[3])

console.log('Hello '+userName)