# Full App Hackathon
The idea behind this project is to get you to build a MEAN stack app with your team.  This will allow you to put your heads together to solve problems _you_ are creating!

### Requirements
Requirements for the hackathon are loose, it's your team's project!  However, you should have the following things in your project : 
- Express Server
- Mongo database with at least one Collection
- Angular or other framework for the front end

Optionally, you can include:
- Bootstrap
- Responsive design
- A third party API
- Deployment
- Sockets, cookies, web scraping, etc.

It is recommended that you use Github for code collaboration and file sharing. 

### Hackathon Scaffold
> This will help get you started on the full-app hackathon by saving you the time you would generally spend setting up your boilerplate.

#### Basic Layout
The layout for this scaffold should be familiar.  We have the standard folders we use for organizing our different kinds of files.

#### Backend
- Models
    - `things.js` is a sample model file with a `Schema` and a `module.exports` that exports the model
- Controllers
    - `routes.js` is where you should have all your routes defined, as well as references to route handlers to be called
    - `thingCtrl.js` is a sample controller file with route handlers.  It contains some Get / Upsert route handlers and requires the `things.js` model
- Server.js
    - Basic middleware mounted
    - DB connection to a db called `hackathon`
    - Server starting on your `env.PORT` or `3000`

#### Frontend
- Public
    - js
        - Angular!
        - Comes with a `model`, `controller`, and `factory` to get you started.
    - partials
        - Partial HTML files for angular routing.
        - Comes with a `home.html` and `about.html` sample partials
    - css
        - Put your CSS here!
    - index.html
        - placed in the root of the `public` folder to take advantage of `Express` automatically sending down the file on the home ('/') route.

### Judging
Applications will be judged on three criteria:
- Look and feel, usability
- Functionality and utility
- Technical difficulty

Following the judging, each team will regroup and debrief on the process.

See [Hackathon Presentations](https://github.com/RefactorU/curriculum-web-bootcamp/blob/master/README.md#api-hackathon-presentations)

## Exercises

## Resources
- [Git for Hackathon](https://github.com/RefactorU/student-resources-web/blob/master/git-for-hackathon.md)
