# Asynchronous Javascript and XML (AJAX)

## Pros/Cons
Pros:
- fast, dynamic interaction between user and website, server doesn't have to render data
- compact, easier to maintain and understand the code
- Back end separated from front end

Cons:
- Back and Refresh buttons may be rendered useless and, if needed, must be implemented manually in your app
- Javascript may be disabled in the browser, making client-side functionality inoperable
- Must design the UX deliberately to get around these issues


## HTTP Methods
Http methods are basically VERBS that describe what our request is doing.
The URL is going to be the NOUN for what we are doing it to.
- get    get data/html from the server
- post   create/deliver new data on the server
- put    update/edit data on the server
- delete remove data from the server

Examples: 
- get    https://mybank.com/account/balance
- post   https://mybank.com/account/transaction
- delete https://mybank.com/account/fee    (don't you wish!)

### CRUD
These methods all correspond with the `CRUD` model (Create, Read, Update, Delete).  This is typically how database instructions are defined.

## HTTP Status codes
All http requests will receive a response which will include a status code.
For example: 200=success, 404=not found, etc.
You can see what these status codes [here] (http://en.wikipedia.org/wiki/List_of_HTTP_status_codes)

## curl
You can use a unix/bash utility called `curl` to do a command line http request

```sh
curl -i http://www.google.com
curl -i http://pokeapi.co/api/v2/pokemon/charizard/
```

## Angular $http
The angular $http object is built in to the angular library and allows us to make http requests from our javascript code and receive an http response asynchronously (typically an array or json object)

## CORS (Cross Origin Request Sharing)
When an http request is made from a domain outside the domain in which the API resides,
in order to control access to a limited resource, that request may be blocked by the browser.
You can get around this by either disabling CORS checking by adding a plugin to the browser.