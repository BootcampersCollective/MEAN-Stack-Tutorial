// Write a javascript function that will take the first command
// line argument and catenate the files as the remaining command 
// line arguments

// usage: node cat.js catFile file1 {file2} {file3}

// Hint: process.argv, fs.readFileSync(), fs.writeFileSync(), slice()
// array.slice() takes an array and returns a sub-array

var fs = require('fs')

// grab the first (target) filename from the command line
var targetFilename = process.argv[2];

// grab all the rest of the filenames from the command line
var inputFiles = process.argv.slice(3)

// use the array.map() method to keep adding the contents of each
// file in the array into a single combined string
var combined = inputFiles.map(function(el){
    return fs.readFileSync(el,'utf-8');
}).join('\n')

// write that combined string back out to the target filename
fs.writeFileSync(targetFilename, combined)