function solve(input){
    let numbers = input.split(' ');
    
    for (let i = 0; i < numbers.length; i++) {
        if( numbers[i] == ""){
            numbers.splice(i,1);
            i--;
        }
    }
    let finalResult = 0;
    for (let number of numbers) {
        tokens = number.split('');
        let firstLetter = tokens.shift();
        let lastLetter = tokens.pop();
        let num = Number(tokens.join(''));

        if(firstLetter.charCodeAt(0) > 64 && firstLetter.charCodeAt(0) < 91){
            let letterPossion = firstLetter.charCodeAt(0);
            letterPossion -= 64;
            num /= letterPossion;
        }else{
            let letterPossion = firstLetter.charCodeAt(0);
            letterPossion -= 96;
            num *= letterPossion;
        }

        if(lastLetter.charCodeAt(0) > 64 && lastLetter.charCodeAt(0) < 91){
            let letterPossion = lastLetter.charCodeAt(0);
            letterPossion -= 64;
            num -= letterPossion;
        }else{
            let letterPossion = lastLetter.charCodeAt(0);
            letterPossion -= 96;
            num += letterPossion;
        }
        finalResult += num;
    }
    console.log(finalResult.toFixed(2));
}
  
  solve('P34562Z q2576f   H456z'
  );

 
  
  
  