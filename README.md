# Functions

## What are functions and why are they used?
    
Functions are the main “building blocks” of the program. They allow the code to be called many times without repetition.
They usually take parameters and return an output. 
```
    function showMessage(param) {
        return param*2;
}
```
Some specifics of functions:
* We call the function with showMessage() as many times as we need and with different parameters.
* There may be many occurrences of return in a single function. 
* A variable declared inside a function is only visible inside that function. Whereas, a function can access an external variable and modify it. 
* Functions are actions. So their name is usually a verb. It should describe what the function does.
* We can place functions inside of functions. It's called nested functions.


## What are the different types of functions? Provide examples.
    
 There are several ways we can create functions - function declaration, function expression and arrow function expression.
* function declaration
```
    function showMessage(param) {
        return param*2;
}
```
* function expression - We can assign a function to a value.
```
        let sayHi = function() {
        alert( "Hello" );
        };
```
The main difference between these two is that in function expressions we can use the function after its declaration. In contrast, function declarations go on top of the heap when executing the code and can be called anytime.

* arrow function expression, also called anonymous functions
It represents a shorter version of a function expression. On the left side of the => we pass the parameters and then it evaluates the expression on the right with those parameters and returns it. 
```
    let func = (arg1, arg2, ..., argN) => expression;
```
