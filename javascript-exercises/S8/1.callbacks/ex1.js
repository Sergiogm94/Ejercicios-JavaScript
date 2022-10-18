const numbersList = [];

function sum(a, b){
    return a + b;

}

function substract(a, b){
    return a - b;

}

function father(a, b , callback){
    const result = callback(a, b);
    numbersList.push(result);
}

father(30,15, sum);
father(50,25, sum);
father(70,45, substract);
father(20,55, sum);
father(90,35, substract);




console.log(numbersList);