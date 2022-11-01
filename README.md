# Operators and Control Structures

## What are operators? How are they used?

Operators process and add logic to the data.

* Basic operators - "+", "-" , "/", "*", "**", "%"
* "=" - assign value to a variable
* increment/decrement operators<br>
>"++" increment by one - equal to "+= 1"<br>
>"--" decrement by one - equal to "-= 1"<br>
>They can be before the variable or after let x = 0; x++,++x<br>
* “modify-and-assign” operators<br>
>"+=","-=","*=","/=" <br>
>With those we can apply an operator to a variable and store the new result in that same variable.
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
>"===" compares value and type <br>
>"==" compares only the value<br>
>>let str = "";<br>
>>let boo = false;<br>
>>(str === boo) => false - They both equal false but the type is different.<br>
* && - and - 
* || - or - 
* ! - not equal - 
## What are if-else statements? Provide examples.

Sometimes we need to perform an action based on some condition. 
* We can do this with if statement. When the condition returns true, the action is executed.<br>
>>if(condition){<br>
>>>action<br>
>>}<br>
* We can add an else-clause which will execute if the if statment returns false.<br>
>>if(condition){<br>
>>>action 1<br>
>>}else{<br>
>>>action 2<br>
>>}<br>
>>if(condition){<br>
>>>action 1<br>
>>}if else{<br>
>>>action 2<br>
>>}else{<br>
>>>action 3<br>
>>}

* The so-called “conditional” or “question mark” operator lets us do that in a shorter and simpler way.<br>

>The operator is represented by a question mark ?. Sometimes it’s called “ternary”, because the operator has three operands.<br>
>The condition is evaluated: if it’s truthy then value1 is returned, otherwise – value2.<br>

>>let result = condition ? value1 : value2;<br>


## What are switch statements? Provide examples.

>A switch statement can replace multiple if checks. It gives a more descriptive way to compare a value with multiple variants.<br>
>If no case is matched then the default code is executed (if it exists).<br>

>>switch(x) {<br>
>>>case 'value1': action 1<br>
>>[break]<br>
>>>case 'value2': action 2<br>
>>[break]<br>
>>>default: action 3<br>
>>[break]<br>
>>}<br>
