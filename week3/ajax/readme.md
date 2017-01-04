# Asynchronous Javascript and XML (AJAX)

## Pros/Cons


## HTTP Methods
- get    get data/html from the server
- post   create/deliver new data on the server
- put    update/edit data on the server
- delete remove data from the server

### CRUD
These methods all correspond with the `CRUD` model (Create, Read, Update, Delete)

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

## CORS (Cross Origin Request Sharing)
When an http request is made from a domain outside the domain in which the API resides,
in order to control access to a limited resource, that request may be blocked by the browser.
You can get around this by either disabling CORS checking by adding a plugin to the browser.