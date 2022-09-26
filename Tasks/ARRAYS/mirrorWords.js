function solve(string){
    let patern = /(?<sign>[@#])(?<wordOne>[A-Za-z]{3,})(?<middleSign>[@#]\1)(?<wordTwo>[A-Za-z]{3,})[#@]/g;
    let match = patern.exec(string); 
    let matches = [];
    let mirrorWords = [];
    while(match != null){
        matches.push(match[0]);
        if(match.groups.wordOne == (match.groups.wordTwo).split('').reverse().join('') ){
           mirrorWords.push(`${match.groups.wordOne} <=> ${match.groups.wordTwo}`);
        }
        match = patern.exec(string);
    }
        (matches.length > 0) ? console.log(`${matches.length} word pairs found!`) : console.log(`No word pairs found!`) ;
        (mirrorWords.length > 0) ? console.log(`The mirror words are:\n${mirrorWords.join(', ')}`) : console.log(`No mirror words!`);         
}

  
  solve([
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
    ]    
  );
