// Write a function, which receives two parameters. 
// The first parameter will be a string with some words separated by ', '.
// The second parameter will be a string that contains templates containing '*'.
// Find the word with the same length as the template and replace it.

function solve(str,text){
  let inportWords = str.split(', ');

  for (let startWord of inportWords) {
    text = text.replace('*'.repeat(startWord.length),startWord)
    }
    console.log(text);
  }


solve('great, learning',
'softuni is ***** place for ******** new programming languages'
);
