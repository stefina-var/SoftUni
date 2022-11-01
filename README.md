# Arrays

## What are arrays?

Array is an object that stores values in order. Every value has its index. This is a number that refers to the location where the value is stored. When we want to access a value, we can get it with its index. The indexes start from 0.

## What kind of values can we store in arrays?

They can store numbers, strings, boolean values, characters, objects, undefined, and so on.

## What ways can we use to iterate over an array?
We can iterate over an array with loops. Most commonly for loop.<br>
```
for (let i = 0; i < array.length; i++) {
  text += array[i] + "<br>";
}
```
There are also some methods - map(),forEach()etc.<br>

```
arr.forEach(function(item, index, array) {
  // ... do something with item
});
```

## What are array methods? Examples?

There is a wide variety of methods to help us manipulate the data inside of an array.<br>
Some of the most common methodsre:<br>
* array. push()- adds an element at the end of the array
* array.sort()- sort the array

## Which array methods return a new array?
* slice(start, end) - The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included). The original array will not be modified.
* concat() - Creates a new array that includes values from other arrays and additional items.
* map() - It calls the function for each element of the array and returns the array of results.
* forEach()-Allows to run a function for every element of the array.
* filter()-returns an array of all matching elements:
and more...

## Which array methods modify the original array?
* splice(start, delete out, item1, item2, item) - The splice method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. It modifies the original array.
* sort() - sorts the array in place, changing its element order.
* reverse() - he method arr.reverse reverses the order of elements in arr.
  and more...
