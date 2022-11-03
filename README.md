# Variables and Data Types

## What are variables?

In programming languages information is stored in variables. In JavaScript, a variable may store two type of values, Primitive values or Reference values. <br>


## What data types are there in JavaScript? Provide examples for each type

### Primitive value

When we access a primitive value, we manipulate the actual value stored in that variable. And when we assign a value from one variable to another, it creates a new variable in the memeory.JavaScript stores the primitive value in the call stack (Execution context). 
```
let a = "hello";
let b = a; 
cosnole.log(b) //"hello"
```
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
* 
### Reference Value

Variables that are assigned a non-primitive value are given a reference to that value. That reference points to the object’s location in memory. The variables don’t actually contain the value.
```
var arr = [];
arr.push(1);
\\When we use arr to do something, such as pushing a value, the Javascript engine goes to the location of arr in memory and works with the information stored there.
```

When a reference type value, an object, is copied to another variable using =, the address of that value is what’s actually copied over.
```
var reference = [1];
var refCopy = reference; 
refCopy.push(2);
console.log(reference) \\[1, 2]
console.log(refCopy) \\ [1, 2]
\\Each variable now contains a reference to the same array. That means that if we alter reference, refCopy will also;
```

JavaScript provides three types of Reference values that include *Array*, *Object*, and *Function*. 
