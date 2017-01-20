# Express
Express is a server-side framework that we use to help us do back-end routing.

## Routing
A URL consists of the protocol, domain, top-level domain and route.
The route is used by our server to determine what the client is requesting.

For example, www.mySite.com/user tells the server sitting at www.mySite.com to return a user page.
This would be called the "user" route.

We might also have a "newUser" route that we post information to, so when we go to www.mySite.com/newUser we send information about a new user that the server should insert into the database.

Express has a number of functions to support the various request methods (get, put, post, delete, etc).

The `request` and `response` objects in express will be used extensively.  It would be good to familiarize yourself with these objects.

