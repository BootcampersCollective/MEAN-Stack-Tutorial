# Pokemon Job Appliction

Home page will be a job application form for pokemon.
The list of possible pokemon will be initially populated using the pokemon API 
endpoint https://pokeapi.co/api/v2/pokemon/.

The user will enter the name of the pokemon in a field which will then show
a job application form and pre-populate the job application form with patial data.
- go to the pokemon API endpoint https://pokeapi.co/api/v2/pokemon/{POKE#} and get basic poke info
- save it to the database
- return it to the client and pre-populate the job application form

The user will then enter additional job application form data and submit the application
- save an updated poke job applicant to a database
- clear the selected pokemon and hide the job application form


Squirrel: JSON Formatter extension for chrome was used to view the pokemon API data