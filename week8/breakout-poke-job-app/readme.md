# Pokemon Job Appliction

Home page will be a job application form followed by a list of pokemon.
The list will be initially populated using the pokemon API endpoint https://pokeapi.co/api/v2/pokemon/.

The user will enter the number of the pokemon in a field in order to pre-populate the 
job application form with patial data.
- go to the pokemon API endpoint https://pokeapi.co/api/v2/pokemon/{POKE#} and get basic poke info
- save it to the database
- return it to the client and prepopulate the job application form

The user will then enter additional job application form data and submit the application
- save an updated poke job applicant to a database

Extra: display a list of pokemon job applicants


pokemon info: https://pokeapi.co/api/v2/pokemon
 - name
 - sprites (front_default)
 - weight/height
 - experience (years of experience)
From the form:
 - salary
 - job title

Squirrel: JSON Formatter extension for chrome was used to view the pokemon API data