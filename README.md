# Operators and Control Structures

## What are operators? How are they used?

Operators process and add logic to the data.

* Basic operators - "+", "-" , "/", "*", "**", "%"
* "=" - assign value to a variable
* increment/decrement operators <br>
They can be before the variable or after let x = 0; x++,++x<br>
>"++" increment by one - equal to "+ 1"<br>
>"--" decrement by one - equal to "- 1"<br>

* “modify-and-assign” operators - "+=","-=","*=","/="<br>
With those we can apply an operator to a variable and store the new result in that same variable.
* Bitwise operators
>AND ( & )<br>
>OR ( | )<br>
>XOR ( ^ )<br>
>NOT ( ~ )<br>
>LEFT SHIFT ( << )<br>
>RIGHT SHIFT ( >> )<br>
>ZERO-FILL RIGHT SHIFT ( >>> )<br>

## How do we compare variables? Strict (===) vs non-strict comparison (==). Provide examples.
* In Js we have the comparison operators from maths.<br>
">", "<" , "<=", ">="
* The most interesting however are the "===" and "==">
"===" compares value and type <br>
"==" compares only the value<br>
>let str = "";<br>
>let boo = false;<br>
>(str === boo) => false - They both equal false but the type is different.<br>
* && -The logical AND operator - When we have a set of boolean operands it will return true if and only all the operands are true. Otherwise it will be false.
* || -The logical OR operator- For a set of operands it will returns true if one or more of its operands are true.
* ! - The logical NOT  operator.It takes truth to falsity and vice versa. 
  
## What are if-else statements? Provide examples.

Sometimes we need to perform an action based on some condition. 
* We can do this with if statement. When the condition returns true, a statement is executed.<br>
```
if(condition){
    action
}
```
* We can add an else-clause which will execute if the if-statement returns false.<br>
```
if(condition){
    action 1
}else if{
    action 2
}else{
    action 3
}
```
* The so-called “conditional” or “question mark” operator lets us do that in a shorter and simpler way.<br>

The operator is represented by a question mark ?. Sometimes it’s called “ternary”, because the operator has three operands. The condition is evaluated and if it’s truthy then value1 is returned, otherwise – value2.<br>
```
let result = condition ? value1 : value2;<br>
```

## What are switch statements? Provide examples.

A switch statement can replace multiple if checks. It gives a more descriptive way to compare a value with multiple variants.<br>
If no case is matched then the default code is executed (if it exists).<br>
```
switch(x) {
    case 'value1': action 1
    [break]
    case 'value2': action 2
    [break]
    default: action 3
    [break]
}
```
