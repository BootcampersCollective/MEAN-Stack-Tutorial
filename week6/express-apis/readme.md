# Express and APIs

## Request Module
Node has a module called 'request' that express uses to make http requests on the back end
easier.  The 'request' module is API agnostic (works with any API).  Note that some APIs
may have associated modules that are intended to work with that specific API, making access and
use of that API easier (ie. twitter stream).  
But those API-specific node modules obviously cannot be used with just any API.

## Backend API access
Accessing APIs from the backend is often preferable to accessing them from the front end
using http directly.
- Cross Origin References issues are often alleviated by accessing APIs from the server as opposed
to a client
- If APIs are heavily segmented (meaning that you need to make multiple API calls to get at the data
you want to consume), you can chain the requests more efficiently from the server and compiling the result
rather than doing it serially from the front end.
- Similarly, if you have to modify the data before sending it to the user, that can be easily done
on the server side, keeping the data sent to the client very clean and efficient.
- Private credentials used to access the API can be kept secure on the backend, whereas if they are 
needed on the front-end they are more susceptable to being hacked.

As with all APIs, documentation, content and reliability of service can all be concerns with using
any API.

## Warm-up Exercise
Write a server.js that uses express.  The server.js should handle the root route ('/') and return
a simple message using res.send().  Also include the morgan logger (npm module 'morgan') to do 
some basic development level logging.