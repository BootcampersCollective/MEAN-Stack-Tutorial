# Node Modules

## Review
Node REPL - can run javascript files interactively
Globals - like the Windows scope on the client,
 we have the global object that stores variables, etc. on the server side
Command line arguments - process.argv is an array of arguments
Arrays, Strings, etc - built in object types for javascript that have lots of methods and properties associated with them

## Require/Export
We can use `modules.export` to make an object (or array or whatever) available for use by other files.
Those other files can effectively insert that object (or array or whatever) into the code by doing a `require`

This is an example of something we want to export...

```javascript
// this is in a file named contactInfo.js
module.exports = { name:'Joe', address:'123 Main'}
```

and this is how we would access and then use the exported object

```javascript
var contact = require('contactInfo.js')
console.log(contactInfo.name+' lives at '+contactInfo.address)
```

### Core Modules (built in to Node)
Some modules are built in to node, but are not included by default.
'fs' for example, gives access to the file system to read and write files.

### Installed Modules
Other node modules are publicly published as separate modules that can be installed.
Use npm to install node modules, copying them from where they are publicly available into your local project directory.

```sh
npm init  # creates package.json, the table of contents for modules you have installed
npm install --save colors  # installs the colors module in node-modules, a directory created in your current directory
                           # it also adds a dependency in the package.json file
echo node_modules > .gitignore  # next, we tell git to ignore the node-modules directory when adding and pushing
                           # that prevents us from having many, many copies of the same module code for our various applications

```

Later, if we need to update or reinstall all of the project dependencies, we can just use `npm install` and it will
look at our package.json and reinstall our module dependencies.




