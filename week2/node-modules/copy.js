var fs = require('fs')

var sourceFilename = process.argv[2];
var targetFilename = process.argv[3];

// read a file and save its contents
var fileContents = fs.readFileSync(sourceFilename, 'utf-8')

// write the contents back out to a new file
fs.writeFileSync(targetFilename, fileContents)