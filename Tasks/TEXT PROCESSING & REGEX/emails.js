function solve(str){
    let regex = /(?<!\S)\w*(|\-|\.|\_|)\w*@\w+((\-|\.)\w+)*\.(\w+[\.]?\w+)*\b/g ;
    let match = regex.exec(str);
    while(match !== null){
        console.log(match[0]);
        match = regex.exec(str);
    }
  }
  
  solve('Many users @ SoftUni confuse email addresses. We @ Softuni.BG provide high-quality training @ home or @ class. –- steve.parker@softuni.de.'
  );
