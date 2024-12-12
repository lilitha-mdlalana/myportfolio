---
title: "Variables in JavaScript"
date: 2024-06-19
draft: false
tag: 'Programming'
thumbnail : '/blog/images/variables_in_js_thumbnail.jpg'
slug: 'blog/variables-in-javascript'
author: 'Lilitha Mdlalana'
---


::image
![my image](/blog/images/variables_in_js_header.svg)
::
::the-title
**Variables In JavaScript**
::

::paragraph
Imagine you have a box where you can store things. This box can hold different items at different times, and you can label it so you know what's inside. In JavaScript, variables are like these boxes. Most of the time, your JavaScript application will need to work information and variables are used to store all kinds of information.
::

::heading
**The old way: var**
::

::paragraph
Before 2015,_"var"_ was the only way to declare variables in JavaScript. When you declare a variable using _"var"_ you are telling JavaScript to create a box that can hold anything, and you can change what's inside the box as many times as you want. 
::

::code
```javascript
var myBox = 'apple';
console.log(myBox); // Output: apple

myBox = 'orange';
console.log(myBox); // Output: orange
``` 
::


::paragraph
While _"var"_ is simple, it has some quirks. One major issue is that _"var"_ is function-scoped, meaning the variable is accessible throughout the function it is declared in, even before its declaration, a behavior known as hoisting. This can sometimes lead to unexpected results and bugs.
::


::code
```javascript
console.log(myBox); // Output: undefined (not an error!)
var myBox = 'apple';
``` 
::

::heading
**The Modern Way: let**
::

::paragraph
With the introduction of ES6 (ECMAScript 2015), "_let_" was introduced to offer better control. When you use "_let_", the variable is block-scoped, meaning it only exists within the block of code (enclosed by {}) where it is declared. This helps prevent errors related to variable scope.
::

::code
```javascript
let myBox = 'apple';
console.log(myBox); // Output: apple

myBox = 'orange';
console.log(myBox); // Output: orange

if (true) {
    let myBox = 'banana';
    console.log(myBox); // Output: banana (inside the block)
}
console.log(myBox); // Output: orange (outside the block)
``` 
::

::paragraph
Use "_let_" when you know the value of the variable will change but want to limit its scope to a specific block of code.
::

::heading
**The Immutable Way: const**
::

::paragraph
Sometimes, you want to create a variable that shouldn't change its value once it's set. This is where _"const"_ comes in. When you declare a variable with _"const"_, you are creating a box that cannot be reassigned a different value.
::

::code
```javascript
const myBox = 'apple';
console.log(myBox); // Output: apple

// Trying to reassign will cause an error
myBox = 'orange'; // Error: Assignment to constant variable.
``` 
::

::paragraph
However, it's important to note that const only prevents reassignment of the variable itself. If the variable holds an object or an array, you can still change the contents of the object or array.
::

::code
```javascript
const myBox = ['apple', 'banana'];
myBox.push('orange');
console.log(myBox); // Output: ['apple', 'banana', 'orange']
``` 
::

::paragraph
Use _"const"_ when you know the variable should not be reassigned a new value after its initial assignment.
::

::heading
When to use "let" or "const" 
::

::paragraph
In modern JavaScript development, it's generally recommended to use _"const"_ by default. This helps to ensure that variables are not accidentally reassigned, which can prevent bugs. Use _"let"_ when you know the variable will need to be reassigned, such as within loops or conditionals.
::
