# Request Objects
An http request object consists of many properties, but we will focus on just a few very important ones.

Method: GET, PUT, POST, DELETE (or others)
Protocol: http, https (or others like ftp, dns, dhcp, etc)
Port: 80 (default for http) (or most any other custom defined port, 1025+)
Path: the route that will be handled by the server 
query: the query parameters (specified by adding a ?key=value to the URL)
params: the parameterized segments of the path
body: the object being passed from the client to the server in the case of a POST or PUT 

## Today's example

```sh
A basic path
GET: http://localhost:8080/books
{
    method: 'GET',
    protocol: 'http',
    hostname: 'localhost',
    port: '8080',
    path: '/books',
    query: {},
    params: {}, 
    body: undefined
}

A path with a query parameter (title)
GET: http://localhost:8080/books?title=bible
{
    method: 'GET',
    protocol: 'http',
    hostname: 'localhost',
    port: '8080',
    path: '/books',
    query: { title: 'bible' }, 
    params: {}, 
    body: undefined
}

A path with a parameterized route
GET: http://localhost:8080/books/comedy
{
    method: 'GET',
    protocol: 'http',
    hostname: 'localhost',
    port: '8080',
    path: '/books',
    query: {}, 
    params: { genre: 'SciFi' }
    body: undefined
}

A post with a body containing the definition of a new book
POST: http://localhost:8080/books
{
    method: 'GET',
    protocol: 'http',
    hostname: 'localhost',
    port: '8080',
    path: '/books',
    query: {}, 
    body: {
        title: "The New Book",
        author: "John Doe",
        publicationDate: "1/1/2000",
        genre: "History"
        }
}
```

The body of a POST is also known as the `payload`.


##
Speaking 'restfully' the method will be a verb (like get, post, delete)
and the path will be a noun (ie. "GET /book" or "POST /deposit").

## Query Parameters
Query parameters are added to the URL using the syntax "/route?key=value"

## Parameterized Routes
Parameterized routes are defined by Express using the "/route/:key" syntax in the route handler middleware.

## MVC (Model View Controller)
We delved into breaking our files up into more discrete pieces as well.  We will address this in more depth in a later lecture, but...

In the ROOT directory we will have:
- `package.json` (created by `npm init`)
- `node-modules` (created when installing a third party node module, `npm install --save XXX`)
- `server.js` (conventional name, the node server that is listening for requests)

Below that we will have a few directories:
- `public` (contains all files which may be served to the client)
  - `html` (all html files)
  - `js` (all javascript files which may be served to client, like angular code)
  - `styles` (all css styling files)
- `routes` (or sometimes `controllers`, all javascript files which handle routing, data manipulation and control)
- `models` (all mongoose files with schema and accessor functions)

## module.exports and require
You can make variables and functions defined in one file accessible to another by using
`module.exports` to export a function or an object with properties for those 
variables and/or functions.  
Typically...
- the server will require a (main) router file (routes/index.js in our case).  The server's job is to listen for requests and pass them on to the router.
- the router file will require various route handler file(s) (routes/library.js in our case).  The router's job is to handle the middleware and then parcel off specific route endpoints to their corresponsing handlers)
- the route handler file will require the model file(s) (models/library.js in our case). The route handler's job is to process the request and send a reply.  It will most often need to access the model (ie. database) to do this.
- the model files are data objects, arrays, database schemas, etc. that serve as persistent data storage.  Other than functions to query the data, no other real logic or data manipulation takes place here.

Don't stress.  We will talk about MVC and "separation of concerns" in a later lecture.  The core of this lecture is understanding the request object, query parameters parameterized routes and request bodies).