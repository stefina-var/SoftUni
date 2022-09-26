function solve(input){
    let text = input[0];
    let words = input[1];
    let patern = /\b(_+)\b/g;
    debugger;
    let finalText = text;
    let match = patern.exec(text);
        while( match !== null ){
            let string = match[0].trim();
            let currWord;
            for (let word of words) {
                if (string.length === word.length){
                    currWord = word;
                }
            }   
            finalText = finalText.replace(string,currWord);
            match = patern.exec(text);
        }

   console.log(finalText);
}
  
  
  solve(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
  ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]
  );
  