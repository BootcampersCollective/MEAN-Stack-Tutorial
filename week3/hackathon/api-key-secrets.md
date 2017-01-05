# API Key Secrecy

When you push your source up to github into a public repository, scoundrels out there will try to scrape repositories to find API keys, passwords, etc.

So how do we keep our API keys private?

Store the key in the environment and have your javascript get the value from the environment directly.

Given that you want to have your code do something like

```javascript
var APIKEY='ab123'
```

a better way would be something like


```javascript
var APIKEY=process.env.APIKEY  // this uses the built-in object process to get the environment properties
```

Now we need to set the key in the environment.  We can do this in a couple of ways.

We can set it directly on the command line prior to starting the server.

```sh
$ export APIKEY="abc123"
$ http-server
```

This works, but it only works for that shell.  If you start another shell or logout and login again later, the value is lost and needs to be set again.

Alternatively (and better, IMHO) you can set the variable in your .bashrc so that EVERY shell created going forward will have that value.

Edit the file ~/.bashrc and add `export APIKEY="abc123"` to the file and then re-initialize your shell using the `source` command.  You can verify that the variable is set in the environment by running the `env` command and 'grepping' for the name (APIKEY)

```sh
$ nano ~/.bashrc
$ source ~/.bashrc
$ env | grep APIKEY
```

Then, going forward every shell will have that variable defined in your environment and you can access it from javascript as described above.

**NOTE**: If you use this technique, running the server on your machine will work automatically - but if you go to another machine (like a DEMO MACHINE!) - you will need to make sure that that environment variable is also set on that other machine, or it will fail.

