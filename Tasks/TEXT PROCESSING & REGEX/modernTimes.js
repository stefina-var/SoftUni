// find everyword with #
function solve(text){
    let words = text.split(' ');
    for (let word of words) {
      if(word.length > 1 && word.startsWith("#")){
        let pattern = /\b[A-Za-z]+\b/g;
        let newWord = word.substring(1);
        let match = pattern.exec(newWord);
        if( match !== null){
          console.log(newWord);
        }
      }
    }
  }

solve('Nowadays everyone uses # to tag a #speciansns word in #socialMedia'
);
