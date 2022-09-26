function solve(arr){
    console.log(arr
        .filter((x,i) => i % 2 != 0)
        .map((x) => x*2)
        .reverse()
        .join(" "));    
}
solve([10, 15, 20, 25]);