//Write a program that keeps track of the construction of a 30-foot wall. You will be given an array of strings that 
// must be parsed as numbers, representing the initial height of mile-long sections of the wall, in feet. Each section has 
// its construction crew that can add 1 foot of height per day by using 195 cubic yards of concrete. All crews work 
// simultaneously (see examples), meaning all sections that aren't completed (are less than 30 feet high) grow by 1 
// foot every day. When a section of the wall is complete, its crew is relieved. 
// Your program needs to keep track of how much concrete is used daily until the completion of the entire wall. In the 
// end, print on a single line, separated by comma and space, the amount of concrete used each day, and on a second 
// line, the final cost of the wall. One cubic yard of concrete costs 1900 pesos. 

function buildWall(array){

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