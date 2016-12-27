// var nameInput = document.querySelectorAll('.name')[0]
// this does the same thing and since we know we just have one .name element
// we can just use querySelector()
// var nameParagraph = document.querySelector('.name');
// var nameInput = document.querySelector('#nameInput');

// console.log("Name Input:", nameParagraph)

// nameParagraph.addEventListener( 'click', function(event) {
//     nameParagraph.classList.add('hide');
//     var currentName = nameParagraph.innerHTML

//     nameInput.value = currentName
//     nameInput.classList.remove('hide')
// })

// nameInput.addEventListener( 'blur', function(event) {
//     nameInput.classList.add('hide');
//     var currentName = nameInput.value
//     console.log(currentName)

//     nameParagraph.innerHTML = currentName
//     nameParagraph.classList.remove('hide')
// })

// This is a more generic way of handling these events

// First, grab the inputPair divs
var inputPairs = document.querySelectorAll('.inputpair') // this is how we grab all elements based on class name
var inputElements = document.querySelectorAll('input')  // this is how we grab all elements based on element type

// Next, let's write an event handler function that will hide the paragraphs and display the inputs
// when the paragraphs are clicked
var onClickEvent = function (event) {
    console.dir(event);
    var paragraph = null;
    var input = null;
    // only do this if the event target is the paragraph element
    if (event.target.localName === 'p') {

        console.dir('clicked on the paragraph');
        paragraph = event.target;
        input = event.target.previousElementSibling;
        // if this is a paragraph, hide the paragraph and show the input
        // console.dir("Input:", input)
        paragraph.classList.add('hide');
        // gee, I wish we could 'bind' paragraph.innerHTML to input.value (angular, hint, hint)
        var currentName = paragraph.innerHTML
        input.value = currentName
        input.classList.remove('hide')
    }
}

// and create another event handler that will hide the input and display the paragraph
// if the input is 'blurred' (focus moves to another area)
var onBlurEvent = function (event) {
    console.dir(event);
    var paragraph = null;
    var input = null;
    // make sure this is an input element
    if (event.target.localName === 'input') {
        console.dir('blurred the input');
        input = event.target;
        paragraph = event.target.nextElementSibling;

        input.classList.add('hide');
        var currentName = input.value
        paragraph.innerHTML = currentName
        paragraph.classList.remove('hide')
    }
}

// add the event listeners to every input pair div that we find in the html to handle the click event
for (var i = 0; i < inputPairs.length; i++) {
    // console.log("Input Pair:",inputPairs[i])
    inputPairs[i].addEventListener('click', onClickEvent);
}

// and finally, add the event listeners to every input that we find in the html to handle the blur event
for (var i = 0; i < inputPairs.length; i++) {
    inputElements[i].addEventListener('blur', onBlurEvent);
}