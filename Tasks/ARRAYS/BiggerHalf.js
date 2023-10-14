//A JS function that sorts the array in ascending order and returns a new array, containing only the second half of the input. 

function task (arr) {
    let firstArr = arr;
    firstArr.sort((a,b)=>(a - b));

    let newArr = firstArr.filter((element,index) => index > (firstArr.length/2 -1 ));

    return newArr;
}