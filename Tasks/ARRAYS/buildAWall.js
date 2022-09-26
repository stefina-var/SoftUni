function buildWall(array){
    debugger;
    let countDays = 0;
    let concretePerDay = 0;
    let concreteMoney =[];
    let finalSum=0;
    array.sort((a,b) => a -b );
    let smaller = array[0];

    for (let j = 0; j < 30-smaller; j++) {
            for (let i = 0; i < array.length; i++) {
                if (array[i]<30){
                    array[i]++;
                    concretePerDay ++;  
                }   
            }
        concreteMoney.push(concretePerDay*195); 
            concretePerDay=0;
    }  

    for (const money of concreteMoney) {
        finalSum += money;
    }
    console.log(concreteMoney.join(', '));
    console.log(`${finalSum*1900} pesos`);  
}
    
buildWall([17, 22, 17, 19, 17]);