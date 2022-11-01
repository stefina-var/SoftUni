# Variables and Data Types

## What are variables?

In programming languages information is stored in variables. They represent places in the computer's memory.
In Js they can be defined with keywords let/const/var. (Let is used when the variable type can be changed. Const in when it will remain the same. they both are only in the scope there are defined in. Var in global, but is not recommended to be used.) 
There are 7 primitive types of variables. 

## What data types are there in JavaScript? Provide examples for each type

* string - It stores textual data. It is enclosed within single quotes, double quotes or backticks. 
  Every string has a length and we can access every letter by it's index.
* number - In Js we have only one type for numbers for both integers and floating numbers.
* boolean - Holds a variable that is only true or false 
* undefined - It's a variable that is declared, but not initialized. 
  *let name; - Here we have a declaration of a variable, but we haven't set it to anything.*
* null - It represents a nonexisting/invalid object value.
* symbol - 
* BigInt - BigInt is a numeric data type that can represent integers in the arbitrary precision format.

Variables can be classified as falsy or thuthy. 
falsy - 0,-0,+0,undefined, null, Nan, false,''
truthy - string, number, array, object, true 
