var myArgs = process.argv

console.log(myArgs)

var userName = myArgs[4]
console.log("port=",myArgs[2])
console.log("application name =",myArgs[3])

console.log('Hello '+userName)