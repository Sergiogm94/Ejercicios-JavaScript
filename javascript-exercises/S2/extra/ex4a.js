['Caracol', 'Mosquito', 'Salamandra', 'Ajolote']
function findArrayIndex(array, text) {
    for(let i = 0; i < array.length; i++){    //Recorre el array de la function
        let animal = array[i];                //La variable animal recoge el i del array
        if(animal === text){                  //Si el elemento del array coincide con el parametrotexto:
            return i;                         //Devuelve la posición en el array  
        }
    }
}

const prueba = findArrayIndex(['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'], 'Caracol');
console.log(prueba);