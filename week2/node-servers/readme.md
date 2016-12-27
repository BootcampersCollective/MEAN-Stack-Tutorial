# Node Servers

Instead of using the http-server application that we got using

```sh
npm install -g http-server
```

we can write our own server using the `http` module which is built into node  (see serverNode1.js and serverNode2.js)
or we can install Express and use it to create a simple server (serverExpress.js).

```sh
npm init
npm install --save express
```

You can see how we use javascript and the objects and functions that the modules provide for us
to add logic to create a server that does what we want.  It can look in alternate locations for
files to serve up, it can handle different kinds of requests, etc. and be more customized to our specific needs

We will dive deeper into node and express when we get deeper into the server side later in this course.