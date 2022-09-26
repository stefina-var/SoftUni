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
