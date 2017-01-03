# Front End Routing

Front end routing is done to bring in a different page or a different ng-view into a page based on the URL path.
Typically front end routes will handle basic, simple web pages (ie. home, about, contact us, etc).
We will be using Angular to simplify the handling of routes, but rememeber - angular is just a framework.  We could also do the same front end routing using built-in or third party node libraries and create our own route handling logic.  It's just a lot more work!

Back end routing (in our case, using Express) is usually intended for public vs. protected (ie. API) routes, web pages vs. json data, etc. - more based on content and passing data via the body or query parameters.

## ng-view
We will use Angular's ng-view directive to swap different html snippets or `templates` into a single main page, thus sharing things like a header, footer, navigation bar, etc. while giving it the appearance of multiple pages.

## Route Handling
We will use angular's routing library to create front end routes which will then load these html templates into our main page, based on the URL path.

## Exercise
We are going to create a coffee shop app consisting of 3 pages:
- a home page
- a menu page
- a page describing the origins of our fine coffee

### Templates
The templates directory is where we store our html template files which contain the html snippets that will be inserted into the ng-view.  

## Reference
Here is a link off to the ngRoute documentation which describes the ngRoute module, the $routeProvider object, etc.

[ngRoute](https://docs.angularjs.org/api/ngRoute)
