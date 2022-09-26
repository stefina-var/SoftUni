let input = [
    'My, Keyboard, Is, Broken, Sorry, Maybe, I, Shall, Try, A, Typewriter' 
]
 
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);


let words = gets().split(', ');

let firstLineOfKeyboard = ['q','w','e','r','t','y','u','i','o','p'];
let secondLineOfKeyboard = ['a','s','d','f','g','h','j','k','l'];
let thirdLineOfKeyboard = ['z','x','c','v','b','n','m'];
let finalWords = [];
debugger;

for (let index = 0; index < words.length; index ++) {
    let currWord = words[index].toLowerCase().split('');
    let uniqueCurrWord = [...new Set(currWord)];
    let br = 0;

    for (let m = 0; m < firstLineOfKeyboard.length; m++) {
        if(uniqueCurrWord.indexOf(firstLineOfKeyboard[m]) != -1){
            br++;  
            }
       
    } 
    if(br==uniqueCurrWord.length){
                if(currWord.join('') != words[index]){
                finalWords.push(words[index]);
                }else{
                finalWords.push(currWord.join(''));
                }
            }
    br = 0;

    for (let m = 0; m < secondLineOfKeyboard.length; m++) {
        if(uniqueCurrWord.indexOf(secondLineOfKeyboard[m]) != -1){
            
            br++;    
            }
        
    }
    if(br==uniqueCurrWord.length){
                if(currWord.join('') != words[index]){
                finalWords.push(words[index]);
                }else{
                finalWords.push(currWord.join(''));
                }
            }
    br = 0;
    
    for (let m = 0; m < thirdLineOfKeyboard.length; m++) {

        if(uniqueCurrWord.indexOf(thirdLineOfKeyboard[m]) != -1){
            br++;
            }      
        }
    if(br==uniqueCurrWord.length){
        if(currWord.join('') != words[index]){
        finalWords.push(words[index]);
        }else{
         finalWords.push(currWord.join(''));
        }
    }

    
}

 print(finalWords.join(', '));





