['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño']

function swap(array, a, b) {                //Se crea la función
    const valor1 = array[a];                //Creamos una variable y le damos el valor del primer parametro
    array[a] = array[b];                    //Se iguala el valor de ambos parametros
    array[b] = valor1;                      //Se cambia el valor del segundo parametro para que sea el de la variable
    return array;                           //Se devuelve el array
}

const array2 = swap(['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño'], 3, 1);
console.log(array2);