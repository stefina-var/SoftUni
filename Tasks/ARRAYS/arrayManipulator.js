function arrayManipulator(numbs, commands){
    debugger;
    for (let command of commands) {
        let tokens = command.split(" ");
        let curCommand = tokens[0];
        if (curCommand === "add") {
            let index = Number(tokens[1]);
            let element = Number(tokens[2]);
            numbs.splice(index,0,element);
        }else if (curCommand === "addMany") {
            let index = Number(tokens[1]);
            tokens.splice(0,2);
            let numbersToAdd = tokens.map(Number);
            numbs.splice(index,0 ,...numbersToAdd);
        }else if(curCommand == 'contains'){
            let searchedNumber = Number(tokens[1]);
            let isIncluded = numbs.includes(searchedNumber);
            if (isIncluded){
                let index = numbs.indexOf(searchedNumber);
                console.log(index);
            }else{
                console.log(-1);
            }
        }else if(curCommand == "remove"){
            let removeIndex = Number(tokens[1]);
            numbs.splice(removeIndex,1);
        }else if(curCommand == "shift"){
            let shiftCount = tokens[1];
            let shiftedNumber = numbs.splice(0,shiftCount);
            numbs.splice(numbs.length,0,...shiftedNumber);
        }else if( curCommand == 'sumPairs'){
            let arrayOfPairs=[];
            if(numbs.length%2==0){
                for (let index = 1; index < numbs.length; index++) {
                let pairSum = numbs[index] + numbs[index-1];
                index++;
                arrayOfPairs.push(pairSum);
            }
            numbs.splice(0,numbs.length,...arrayOfPairs);
            }else{
                for (let index = 1; index < numbs.length; index++) {
                    let pairSum = numbs[index] + numbs[index-1];
                    index++;
                    arrayOfPairs.push(pairSum);
                }
                arrayOfPairs.push(numbs[numbs.length-1]);
                numbs.splice(0,numbs.length,...arrayOfPairs);
            }
            
        }else if(curCommand == 'print'){
            console.log(`[ ${numbs.join(', ')} ]`);
        }
    }
}

arrayManipulator([2, 2, 4, 2, 4],
["add 1 4", "sumPairs", "print"]);
