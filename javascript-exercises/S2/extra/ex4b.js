function findArrayIndex(array, text) {
    for(let i = 0; i < array.length; i++){    //Recorre el array de la function
        let animal = array[i];                //La variable animal recoge el i del array
        if(animal === text){                  //Si el elemento del array coincide con el parametrotexto:
            return i;                         //Devuelve la posición en el array  
        }
    }
}
function removeItem(array, text){
    const indice = findArrayIndex(array, text);   //Se crea una variable que llama a la función anterior
    array.splice(indice, 1);                      //Se utiliza splice para eliminar un elemento del array
    return array;                                 //Devuelve el array
}
 const eliminado = removeItem(['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'], 'Mosquito');
console.log(eliminado);