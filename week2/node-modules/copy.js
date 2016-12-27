var fs = require('fs')

var sourceFilename = process.argv[2];
var targetFilename = process.argv[3];

var fileContents = fs.readFileSync(sourceFilename, 'utf-8')

fs.writeFileSync(targetFilename, fileContents)