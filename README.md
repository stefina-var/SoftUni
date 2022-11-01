# Operators and Control Structures

## What are operators? How are they used?

Operators process and add logic to the data.

* Basic operators - "+", "-" , "/", "*", "**", "%"
* "=" - assign value to a variable
* increment/decrement operators
    "++" increment by one - equal to "+= 1"
    "--" decrement by one - equal to "-= 1"
    They can be before the variable or after let x = 0; x++,++x
*  “modify-and-assign” operators
*   "+=","-=","*=","/=" 
  We often need to apply an operator to a variable and store the new result in that same variable.
* Bitwise operators
    AND ( & )
    OR ( | )
    XOR ( ^ )
    NOT ( ~ )
    LEFT SHIFT ( << )
    RIGHT SHIFT ( >> )
    ZERO-FILL RIGHT SHIFT ( >>> )


## How do we compare variables? Strict (===) vs non-strict comparison (==). Provide examples.
* In Js we have the comparison operators from maths.
 ">", "<" , "<=", ">="
* The most interesting however are the "===" and "=="
"===" compares value and type 
"==" compares only the value
    let str = "";
    str === false => false - They both equal false but the type is different.
* && - and - 
* || - or - 
* ! - not equal - 
## What are if-else statements? Provide examples.

Sometimes we need to perform an action based on some condition. 
* We can do this with if statement. When the condition returns true, the action is executed.
        if(condition){
            action
        }
* We can add an else-clause which will execute if the if statment returns false.
        if(condition){
            action 1
        }else{
            action 2
        }
* We can add more conditions with if-else.
        if(condition){
            action 1
        }if else{
            action 2
        }else{
            action 3
        }

* The so-called “conditional” or “question mark” operator lets us do that in a shorter and simpler way.

The operator is represented by a question mark ?. Sometimes it’s called “ternary”, because the operator has three operands.
The condition is evaluated: if it’s truthy then value1 is returned, otherwise – value2.

        let result = condition ? value1 : value2;


## What are switch statements? Provide examples.

A switch statement can replace multiple if checks. It gives a more descriptive way to compare a value with multiple variants.
If no case is matched then the default code is executed (if it exists).

    switch(x) {
  case 'value1': action 1
    [break]
  case 'value2': action 2
       [break]
  default: action 3
    [break]
}
