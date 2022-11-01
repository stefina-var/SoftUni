# Variables and Data Types

## What are variables?

In programming languages information is stored in variables. They represent places in the computer's memory.
In Js they can be defined with keywords let/const/var.<br>


## What data types are there in JavaScript? Provide examples for each type
There are 7 primitive types of variables. 

* string - It stores textual data. It is enclosed within single quotes, double quotes or backticks. 
  Every string has a length and we can access every letter by it's index.
```
let name = "Stefina";
let name = 'Stefina';
let name = `Stefina`;

``` 
* number - In Js we have only one type for numbers for both integers and floating numbers.
```
let age = 5;
``` 
* boolean - Stores a variable that is only true or false.
* undefined - It's a variable that is declared, but not initialized. 
```
let name;
typeof name //-undefined Here we have a declaration of a variable, but we haven't set it to anything.
```
* null - It represents a nonexisting/invalid object value.
```
foo is known to exist now but it has no type or value:
const foo = null;
foo; //null
```
* symbol - Symbol is a primitive that's guaranteed to be unique. Symbols are often used to add unique property keys to an object that won't collide with keys any other code might add to the object, and which are hidden from any mechanisms other code will typically use to access the object.
```
const sym = Symbol('foo');
``` 
* BigInt - BigInt is a numeric data type that can represent integers in the arbitrary precision format.

Variables can be classified as falsy or thuthy.<br>
* falsy - 0,-0,0n,undefined, null, Nan, false,''.
* truthy - string, number, array, object, true.
