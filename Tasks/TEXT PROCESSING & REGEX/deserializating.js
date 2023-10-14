// Write a function, which takes the output from the previous task and turns it back into a string.
function solve(input){
    
    let finalString = [];
    for (let line of input) {
        if(line=="end"){
            break;
        }else{
            tokens = line.split(':');
            let char = tokens[0];
            let indexes = tokens[1].split('/');
            for (let index of indexes){
                finalString[index]=char;
            }
        }
    }
    
    console.log(finalString.join(''));
}
    
  
  solve(['a:0/3/5/11',
  'v:1/4',
  'j:2',
  'm:6/9/15',
  's:7/13',
  'd:8/14',
  'c:10',
  'l:12',
  'end']
  );
  