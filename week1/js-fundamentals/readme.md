# Javascript Fundamentals

## Comments
```
<!-- html comment -->
/* css comment */
// javascript single line comment
/*
  javascript block comment 
*/
```

## Variables
Variables must start with a letter, underscore or $. 
You can also use underscores and numbers later in a variable name.
Varaibles can use upper or lower case letters.
Variable names should not have special character
```
var foo; // `declare` variable named foo
var numberOfStaff = 5;  // `defining` a variable by giving it a value
var name = "Joe"; // variables can be of different types
var otherName = name; // you can set a variable to another variable
$scope = myScope;
__myVariable = 3;
$$variableName = 'x';
student1 = teacher4;
```

Invalid variable names
```
me&you
me+you
student#1
snake-case-names-are-not-ok
```

## Variable Primitive Types
- String - the value of string can be expressed with single quotes ' or double quotes "
- Number
- Boolean
- null
- undefined

### Number
- a number can be an integer, float, exponent, long, double, etc.

#### Numeric Literals
```
2       // simple integer
3.14159 // decimal (float, long, double)
1e6     // scientific notation, exponentials, etc.
```

### String Literals
```
'hello world'
"quotation for famous sayings"
"we don't care about special characters!"
'he said, "we don\'t care!"'  // use a backslash to 'literal' or 'escape' a character
'how do we literal a backslash? \\my value\\' //  \my value\
```

**Aside**
There are also special characters like EOL (end of line)/return/cariage return/newline that is represented as \n 
or \t (tab) (and others that you can Google if needed).

'line 1\nline 2'

looks like:

```
line 1
line 2
```

when you print it out

## Numeric Operators
```
+ // addition
- // subtraction
/ // division
* // multiplication
% // modulus or remainder
```

## String Operator
+ // concatention, combine two strings together
**Example:**
```
name = 'joe'
lastname = 'smith'
fullname = name + lastname  //joesmith
```

`Binary operators` operate using two variables/values.
`Unary operators` operate on a single variable.
++  // increment operator
--  // decrement operator

**Example**
index++ // this is the same as saying index = index + 1

Strings are Objects (like most everything else in Javascript)

```javascript
var str = "string";
str.length // 6
str[0] // 's'
str[5] // 'g'
```

## Boolean
Boolean values basically evaluate to be `true` or `false`.

```javasript
var complete = true;
```

### Boolean/Comparison Operators
```
>   greater than
>=  greater than or equal to
<   less than
<=  less than or equal to
==  is equal
=== is literally equal, is the same
```

Don't use '=' alone. That is an assignment operator. 

### Logical Operators
```
!  not
!= not equal to
&& and
|| or
```

## Statements
Whitespace is ignored in statements.  Statements can optionally end with a semicolon.

### Conditional statments

"If I have 3 cups of coffee, I'm jazzed!"

```javascript
var cups;
...
if (cups >= 3) { 
    I = 'jazzed'; 
} else if (cups == '15') {
    I = 'wired!';
} else { 
    I = 'asleep'; 
}
```

Generically...
```javascript
 if (condition) { //then
    // do this stuff
 }
```

## Truthy && Falsey
There are some 'falsey' conditions in javascript that will resolve to false, but may not be obvious.

```
0 - is falsey.  Any non-zero number is truthy
NaN - not a number is 'falsey'
null and undefined are falsey
all other values are truthy
```

## A few handy quick javascript commands
```javascript
console.log(STRING)
alert(STRING)
```
