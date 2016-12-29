# Angular ng-repeat

## Templating
Generating the DOM based on data (like arrays and variables) is called templating.

You can do **server-side templating** by having the server use data from a database or third party API to create html and then send the client the completed html

or


You can do **client-side templating** using something like Angular, which gets data from the server and then modifies the DOM to view that data as html. 

ng-repeat can be thought of as a client-side templating loop, creating html for the DOM by looping over an array.

```html
<ul>
    <li ng-repeat='country in mapCtl.counties'> {{dwarf}}</li>
</ul>
```

can be thought of as doing this kind of thing in javascript

```javascript
countries.forEach(function(country) {
    document.write(country)
})
```

ng-repeat is an angular directive that is very flexible and very powerful.  
We will look at ways it can be used to dynamically display the contents of arrays in various ways.

## Resources
[CDN for Angular](https://cdnjs.com/libraries/angular.js/)
[Angular ng-repeat directive](https://docs.angularjs.org/api/ng/directive/ngRepeat)