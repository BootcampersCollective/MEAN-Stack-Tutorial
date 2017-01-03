# Deployment

## Remote Server
Client (browser, HTML, Angular, etc)
Server (node, Express, Mongo, etc) - typically remote and accessible via ssh

## Digital Ocean Setup
- Create a Droplet
- Under Choose an Image, click One-click Apps
- Select MEAN on 14.04. This has NodeJS and MongoDB pre-installed on it.
- Choose a Droplet Size
- $5/mo should be more than enough for your final
- Choose a Region, probably NY or SF
- Choose a hostname is where you can name your application so it's easy to find in the Digital Ocean dashboard. It is usually a good idea to name it the same as your domain.
- Create your droplet!


You will receive a confirmation email at the address you used to sign up which will contain information you will need to login and manage your droplet server.

```
Droplet Name: My-mean-512mb-sfo1-01
IP Address: 104.236.189.31
Username: root
Password: eda3d929d140afb8
```

1. In your terminal type: 

```sh
ssh root@'your ip address that digital ocean gave you'
```

EXAMPLE ssh root@104.236.189.29

2. Put in the password sent in the confirmation email. Then you will immediately be prompted to change your password.
Type in the given password, and then type in a new password (twice)

You are now remotedly logged in to your server.

```sh
cd opt  # this is where Digital Ocean has pre-isntalled a bunch of stuff (that you don't need)
ls      # shows node_modules, package.json, and lots of defaut configuration files we won't use
rm -rf MEAN # we can get rid of all of this, and we will install our own application code in this directory
``

Instead we are going to pull down our own code

```sh
git clone https://github.com/MYNAME/MYREPO  # this will pull your application source code and install it in /opt
cd MYREP       # move into the directory containing your source code
npm install    # will install all of the npm dependencies defined in your package.json file
```

From here, we can run the server simply

```sh
node app.js  # start node on your server file.  Use control-C to kill the server.
```

And your application is deployed!  You can use your browser and go to the IP address specified in the confirmation email, and use the port number specified in your application to see your app.

Example: 104.236.189.29:8080

In order to have this run as a robust http-server, we will probably want to use `forever` instead of just `node`

```sh
npm install -g forever   # install the forever node package to run your application
forever start app.js      # run forever on your server code.  
```

There are a variety of `forever` commands that you may want to use to start, stop and look at your forever processes.

forever start <serverfile>	    Starts your application
forever stopall	                Stops ALL forever processes
forever restart <serverfile>	Restarts your application
forever logs <serverfile>	    Shows your console.logs
forever list	                Shows your running forever processes
forever --help                  Shows the usage for all forever commands

You can look at the console log files for your server.

Example: `cat/root/.forever/ZDQz.log`    'ZDQz.log' is a file that shows logs log file.

To update your server with a new version of your app...

```sh
cd /opt/MYREPO            # go to the directory containing your code
git pull origin master    # pull down the updated code
forever list              # look at the existing forever process(s)
forever stopall           # stop the existing forever process(s)
forever start app.js      # restart the server using the newly installed code
```

References:
[Digital Ocean](https://www.digitalocean.com)

Side note: We will talk about this later, but similar to `forever`, there is a node package called `nodemon` that we will use in development to automatically stop and restart our node server whenever we update our source code.
This is not the kind of behavior we want on our production server, however.  Stick with `forever` for deployment.
