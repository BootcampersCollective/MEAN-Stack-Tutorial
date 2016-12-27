// Write a javascript function that will take the first command
// line argument and catenate the files as the remaining command 
// line arguments

// usage: node cat.js catFile file1 {file2} {file3}

// Hint: process.argv, fs.readFileSync(), fs.writeFileSync(), slice()
// array.slice() takes an array and returns a sub-array

var fs = require('fs')

var targetFilename = process.argv[2];

var inputFiles = process.argv.slice(3)

var combined = inputFiles.map(function(el){
    return fs.readFileSync(el,'utf-8');
}).join('\n')

fs.writeFileSync(targetFilename, combined)