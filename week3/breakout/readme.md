# Angular Overview

## Angular components
- controller
    - controls specific areas of html
    - can have shared factories injected to make data/functions accessible
- factory
    - shares data between controllers by injection
- service
    - very similar to factories, but you use 'new' to instantiate it and then refer to that data using 'this'
- provider
    - very subtly different from service, also uses the 'new' keyword to instantiate, provides module-wide configuration for a service
- directive
    - a custom directive definition that can be used in the html which is controlled by the associated angular module
- filters (not attached to the module, generally accessible)
    - modify/transform data to display it in a different way than it is stored (sorting, formatting, filtering/reducing content)

## Very Sad Looking Diagram

Module  (one module per project)
|
|----------------Factory  (one factory for any shared data/functions between controllers)
|                  |
|---Controller-----|      (one controller per area/section of an html page)
|                  |
|---Controller-----|
|
|---Controller
|
|----------------Service  (one service for any shared data/functions between controllers)
|                  |
|---Controller-----|      (one controller per area/section of an html page)
|                  |
|---Controller-----|
|
|---Controller

## Functional Decomposition
Breaking a functional requirement down into discrete pieces that can be tackled one at a time.

Recognizing patterns (ie. repeated information looks like a loop/ng-repeat, choices look like if/thens or ng-ifs, a section of a webpage is its own controller or ng-view, etc)


## Breakout
Compare using Angular and vanilla javascript to write a web page that
- repeats over an array of objects to display them in a list
- adds an event handler to each item in the list
- changes the styling of the element that was clicked

(see code)

## Resources
[A comparison of Factory/Service/Provider](https://tylermcginnis.com/angularjs-factory-vs-service-vs-provider/)