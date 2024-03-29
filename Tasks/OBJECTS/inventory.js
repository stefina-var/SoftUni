//In the era of heroes, every hero has his items that make him unique.
//Create a function that creates a register for the heroes, with their names, level, and items, if they have such. 
//The register should accept data in a specified format, and return it presented in a specified format. 

function inventory(array){
let heros = [];

for (const element of array) {
    let info = element.split(' / ');
    let name= info[0];
    let level = Number(info[1]);
    let items =  info[2];
    let hero ={};
    hero['name'] = name;
    hero['level'] = level;
    hero['items'] = items;
    heros.push(hero);    
}
heros.sort((a,b) => a.level - b.level);
for (const hero of heros) {
    console.log(`Hero: ${hero.name}
level => ${hero.level}
items => ${hero.items}`);
}
}

inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ]
    );