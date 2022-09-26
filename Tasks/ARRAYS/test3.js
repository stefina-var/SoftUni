let input = [
    2
]
 
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
 debugger;



let n = +gets();

let apples = 0;
let oranges = 0;

for (let k = 1; k <= n; k++) {
    if(k%2==0){
        oranges += k*k;
    }else{
        apples += k*k;
    }
}
print(oranges - apples);
