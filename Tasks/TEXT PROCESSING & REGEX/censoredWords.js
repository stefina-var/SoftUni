// Write a function that receives a text as a first parameter and a single word as a second. Find all occurrences of that 
// word in the text and replace them with the corresponding count of '*'

function solve(str,word){

  while (str.includes(word)) {
    str = str.replace(word,'*'.repeat(word.length));
  }
  console.log(str);
}

solve('A small sentence with some words', 'small');
