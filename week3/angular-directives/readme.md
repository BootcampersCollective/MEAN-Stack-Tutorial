# Angular Directives

## Directives
- ng-app
    - initializes the angular module, serves as a container for all of our controllers and factories

```html
<html ng-app>
  ...
</html>
```

- ng-controller
    - where the magic happens, variables are shared, functions are called
    - we typically use the "controller as" syntax in our html to scope our variables and methods to a specific controller

```html
<div ng-controller='myController as myCtl'>
    <h1>{{myCtl.title}}</h1>
</div>
```

- ng-init
    - declare and define initial value(s) for html/javascript variables

```html
<body ng-init="students=['John', 'Mary', 'Kenneth', 'Holly']">
```

- ng-model
    - binds an input field to a javascript variable in the controller

```html
<input type="text" ng-model="message">
<h3>{{ message }}</h3>
```

- ng-click
    - binds an event to a javascript function in the controller

```html
<button ng-click="count = count + 1" ng-init="count=0">Increment Up</button>
<div>{{ count }}</div>
```

or

```html
<button ng-click="myCtl.incrementCounter()">Increment Up</button>
<div>{{ myCtl.count }}</div>
```

- ng-repeat
    - for loop for html, bound to a javascript array

```html
<body ng-init="students=[{name: 'Jacob', age: 28}, {name: 'Mary', age: 32}, {name: 'David', age: 26}]">
    <ul>
        <li ng-repeat="student in students">
            <ul>
                <li ng-repeat="(key, val) in student">{{ key }}: {{ val }}</li>
            </ul>
        </li>
    </ul>
</body>
```

(look at the documentation for some of these and get a feel for what other angular directives are available to you)
- ng-class
    - binds a css-class attribute to a javascript variable

```html
<!-- inside our html -->
<div ng-class="{'avenged' : avengers.avenged}" ng-click="avengers.avengeMe()">
    Avenge Me!
</div>
```

```css
/* inside our css style sheet */
.avenged{
    background-color:red;
    width:200px;
    height:200px;
}
```

```javascript
// inside our javascript angular controller
aCtrl.avengeMe = function(){
    aCtrl.avenged = !this.avenged;
}
```

- ng-style
    - a way to assign styles to html elements dynamically

```html
<div ng-init="myStyle={'color': 'blue'}">
    <button ng-click="myStyle={'color':'red'}">Make it red</button>
    <h3 ng-style="myStyle">Hello!</h3>
</div>
```

- ng-href
    - a safe way to dynamically generate html references in anchor tags and such

```html
<a ng-href="http://mysite.com/users/{{ user.id }}">Profile</a>
```

- custom directives
    - you can also write you own custom angular directives if there is no pre-defined directive that does what you need it to do.

## Resources
[Angular Directives](https://docs.angularjs.org/guide/directive)

