# Intro to Angular

## Angular
Angular is:
- strongly opinionated (doesn't play well with other technologies, wants things to happen "the angular way")
- more declaration (establishes relationships/bindings between html elements and javascript variables so you don't have to declaratively set this variable to that value and so forth)
- front-end only (only works on the client, not a server technology)
- the model/contoller piece of a 'fat client', providing control and data for the html view

## Angular components
- Module (AKA app) is the bucket which carries all of the other angular components
- Controller is a function that allows for javascript to interact with the html via bindings to input.values, element.innerHTML and various other things like ng-click functions
    - Dependencies are "injected" into a controller to introduce additional capability to the controller function
- Directives (ie. ng-app, ng-controller, ng-model, ng-click, etc.) are HTML attributes added to elements to introduce angular functionality
    - Later, we will see that you can create custom directives as well

## Content Delivery Network (CDN)
Angular is introduced/imported into an HTML file via the `<script>` tag which brings in the angular code module via an external website (CDN)

The `<script>` tag can get universal resources from our server (like our html and javascript files) or it can go to a CDN that is a shared, public resource for commonly used resources (like angular).  
So we don't need to maintain and deliver our own copy of an angular module.  We can tell our application to go get that resource from a CDN library of resources.

