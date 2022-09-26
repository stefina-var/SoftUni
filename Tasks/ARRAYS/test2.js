let input = [
    '6,2,2'
]
 
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
debugger;

let str = gets().split(',');
let money= Number(str[0]);
let costOfBeer = Number(str[1]);
let cupsForExchange = Number(str[2]);

let beers = 0;
let firstBoughtBeers = Math.floor(money/costOfBeer);
beers += firstBoughtBeers;
let emptycups = beers;

while(emptycups/cupsForExchange>=1){
    let newCups = Math.floor(emptycups/cupsForExchange);
    beers += newCups;
    emptycups = emptycups - newCups*cupsForExchange + newCups;
    newCups=0;
}

print(beers);

    

