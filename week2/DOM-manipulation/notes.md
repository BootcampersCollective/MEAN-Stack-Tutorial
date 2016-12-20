# DOM Manipulation

## DOM - Document Object Model


The document itself is a node - the root node is the DOCTYPE (document)
Different node types store the different types of html information
- All HTML elements are element nodes
- All HTML attributes are attribute nodes
- Text inside the HTML element is text node
- Comments are comment nodes

The html for a page and its related DOM might look like:

```html

<!DOCTYPE html>
<html>
<head>
    <title>
        Example
    </title>
</head>
<body>
    <h1>
        Example Page
    </h1>
    <p>
        This is an example page.
    </p>
</body>
</html>

```

![DOM Tree](http://www.computerhope.com/jargon/d/dom1.jpg)


## Select a Node using Javascript
There will always be a root 'document' node for any html page.  We can start there.

### Query Selector
document.querySelector('p')         // returns the first DOM element that matches the query
document.querySelectorAll('div')    // returns an array of all DOM elements that match the query
document.querySelectorAll('h1#myId')
document.querySelectorAll('h1.myClass')

document.getElementsByTagName("p")      // grab all elements by searching for an element tag
document.getElementsById("myId")      // grab all elements by searching for an id
document.getElementsByClass("centered")  // grab all elements by searching for a class

Once we have a DOM element, we can do various things with it using javascript.


### Adding Elements
We can also add new elements to the DOM.

```javascript
var div6 = document.createElement("div")    // create a new DOM element
div6.id = 'div-6'                           // give it an id
div6.innerHTML="I'm div #6"                 // create the text that would be between the element tags
div6.style.color = 'crimson'                // you can even add styling attributes to the DOM element 

// then we need to insert our new element into the DOM
body = document.querySelectorAll('body')[0] // start by grabbing the element we want to insert the new element into
body.appendChild(div6)                      // and then we can add a new child node onto the end of the list of child nodes for the body
```

## Event Handling

### Modifying an Element

We can dynamically modify the text, styling or location of a document element by adding
an event listener that modifies the DOM.

```javascript
var el = document.querySelectorAll('#div-1')[0]

el.addEventListener('click', function() {
    el.innerHTML = "Hello World, I'm in div-1"
})
```
Events will travel up the DOM through every parent allowing each element to handle the event
in it's own way.  Sometimes this isn't the behavior that we want.  We can prevent this by
stopping the propagation of the event up the tree.

We use `event.stopPropagation()` to prevent an event from `bubbling up` the DOM

``` javascript
// add an event listener to the outter div
var outter = document.querySelector('.outter');
outter.addEventListener('click', function() {
    console.log("clicked inside the outter div")
}
// add an event listener to the inner div
var inner = document.querySelector('.inner');
inner.addEventListener('click', function() {
    // stopPropagation will stop the event from 'bubbling up' to the containing elements
    event.stopPropagation();
    console.log("clicked inside the inner div")
});
```

Similarly, sometimes we don't want the default action to occur when an event is triggered.
We use `event.preventDefault()` to prevent a default action from occuring.

```javascript
// let's confirm that the user really wants to go to the link before redirecting
// here we define the function, but we aren't calling anything yet...
var areYouSure = function(event) {
    if (confirm("Are you sure?")) {
        // continue on as usual
        return;
    } else {
        // stop the event - effectively cancel any action that the event would normally trigger
        event.preventDefault();
    }

// add an event listener to the link/anchor tag to prompt with the confirmation dialog first
document.querySelector('a').addEventListener('click', function(event) {
    areYouSure(event)
})
```

## Check out
[HTML DOM Node Properties & Methods](http://www.w3schools.com/jsref/dom_obj_all.asp)
[Javascript Events](https://developer.mozilla.org/en-US/docs/Web/Events)


