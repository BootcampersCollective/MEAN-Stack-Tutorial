# Express MVC

## Model/View/Controller
The model is what you KNOW (data - hard coded objects/arrays, database, etc)
The view is what you SHOW (rendered html, css, etc)
The controller is what you GO (all the stuff that goes on between model and view - routes, transformations, logging, authentication, etc.)

## Demo
We have this hot mess file that we need to maintain.  We start with package.json, index.html and server1.js in the same directory.   
It's **ugly**.
We want to break it out into logical component pieces.

We'll break it out into an MVC (Model/View/Controller) structure.

Steps
1. Let's move index.html into a public directory where all of our view will be.  (We could also call it 'views' or 'html' or anything descriptive)
  - We need to change the path in server1.js to reflect the new location
  - Test it!
2. Next we organize the contents of server1.js into three categories - Server, Controllers/Route Handlers and Model.  Remember that some code is order dependent (like vertically mounted middleware and route handlers) so we can't just put it anywhere.  Some things we can move anywhere, other things must remain relative to others (ie. middleware must be above affected route handlers).  Then test it!
3. Next we pull out the section of server1.js that is just controller/route handling related and move it into a file named router.js in the controllers directory
4. We need to export.modules for the router.js.  Since that file needs access to the express `app` object, we export the module as a function so we can pass the `app` object in from the server.

```javascript
module.exports = function(app) { ... }
```

Then we test it!  Keep testing at every point at which we think the code should be complete again.

5. Then we need to bring that file into server1.js, so we require it and then invoke the function that was exported 

```javascript
var routes = require('./controllers/routes.js')
routes(app)
```

Test it.

6. Next we pull our the section of server1.js that is just model related.  We never access the Users array directly outside of that file, so we just export the access functions (findOne, findAll).  We export them as an object, so we need to give those functions property names.

```javascript
module.exports = {findAll: function(){...}, findOne: function(index) {...}}
```

7. Then we bring that file in to routes.js.  It's not needed in server.js so we don't need to bring it in there.

```javascript
var users = require('../models/users.js')
... users.findOne(index);
```

Test it.

8. We can continue to break things up as needed - pull all the `/api` routes out into a new file and require it in our routes.js, pull the `/dashboard` routes out, etc.

That's called 'refactoring.'  We take code and change some names to make the code more understandable, move things around to make it more logically ordered, etc. to make it more maintainable - but we never change the functionality.